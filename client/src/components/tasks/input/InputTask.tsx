import { FormEvent } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import reducer
import {
  useAddTaskMutation,
  useEditTaskMutation,
} from "../../../features/task/taskApi";
import { removeEditableTask } from "../../../features/task/taskSlice";

// Import components
import Input from "./Input";
import Button from "../../button/Button";
import useGetUser from "../../../hooks/useGetUser";

// type definitions
interface stateType {
  task: {
    hasEditable: boolean;
    editableTask: null | {
      id: number;
      task: string;
      is_complete: boolean;
      user_id: number;
    };
  };
}

const InputTask = () => {
  const [task, setTask] = useState<string | undefined>("");
  const dispatch = useDispatch();
  const { id: userId } = useGetUser() || {};

  // Selector
  const { hasEditable, editableTask } = useSelector(
    (state: stateType) => state.task
  );

  // Task mutation
  const [addTask, { isLoading }] = useAddTaskMutation();
  const [editTask, { isLoading: editTaskLoading }] = useEditTaskMutation();

  // Destacture editable task
  const {
    id,
    task: currentEditableTask,
    is_complete,
    user_id,
  } = editableTask || {};

  // Editable task remove
  const handleEditableTaskRemove = () => {
    dispatch(removeEditableTask());
    setTask("");
  };

  // Handle edit task
  const handleEditTask = () => {
    editTask({ id, data: { task, is_complete, user_id } });
  };

  // Handle submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // if editable task has , it will be handled editable task
    // else it will be handled add task
    if (hasEditable) {
      handleEditTask();
      handleEditableTaskRemove();
    } else {
      addTask({ is_complete: false, task, user_id: userId });
    }

    setTask("");
  };

  // Decide what to button text
  let buttontext = "Add";
  if (isLoading) buttontext = "Adding...";
  if (hasEditable) {
    buttontext = "Edit";
  }
  if (editTaskLoading) buttontext = "Editing...";

  // set editable task in input field
  useEffect(() => {
    setTask(currentEditableTask);
  }, [hasEditable, editableTask]);

  return (
    <form className="flex w-full md:w-[90%] pb-4 " onSubmit={handleSubmit}>
      <Input label="Input Task" value={task} handleChange={setTask} />

      <Button
        buttontext={buttontext}
        classes={`bg-lightPeriwinkle border-l-0 rounded-l-none  ${
          hasEditable ? "rounded-none" : "rounded-lg"
        }`}
        type="submit"
      />

      {hasEditable && (
        <Button
          buttontext="X"
          classes="bg-lightLilac rounded-l-none rounded-lg text-red"
          handleClick={handleEditableTaskRemove}
        />
      )}
    </form>
  );
};

export default InputTask;
