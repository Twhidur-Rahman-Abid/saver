import { useDispatch } from "react-redux";
import {
  useDeleteTaskMutation,
  useEditTaskMutation,
} from "../../features/task/taskApi";
import { addEditableTask } from "../../features/task/taskSlice";
import { TaskType } from "../../type/type";

const Task = ({ data }: { data: TaskType }) => {
  const dispatch = useDispatch();

  // Destacture task data
  const { id, task, is_complete, user_id } = data;

  // Background color
  const bgcolor = is_complete ? "bg-lightPeriwinkle" : "bg-zircon";

  // handle task delete
  const [deleteTask] = useDeleteTaskMutation();
  const handleDeleteTask = (id: number) => {
    deleteTask({ id, user_id });
  };

  // handle task edit
  const addEditTask = (data: object) => {
    dispatch(addEditableTask(data));
  };

  const [editTask] = useEditTaskMutation();

  const handleEditTask = () => {
    editTask({ id, data: { task, is_complete: !is_complete, user_id } });
  };

  return (
    <div className="bg-zircon p-2 mb-4 flex items-center rounded-md">
      {/* left side */}
      <div
        className="w-7 h-7  bg-white rounded-full flex items-center justify-center cursor-pointer "
        onClick={handleEditTask}
      >
        <div
          className={`w-4 h-4 border-[2px] border-solid border-lightPeriwinkle rounded-full  ${bgcolor} hover:bg-lightPeriwinkle`}
        ></div>
      </div>

      {/* Right side */}
      <div className="flex justify-between items-center w-full">
        <h1 className="ml-4 text-lg">{task}</h1>

        <div className="flex gap-2">
          {/* edit task */}
          <i
            className="fa-solid fa-pen-to-square cursor-pointer text-gray-700"
            onClick={() => addEditTask(data)}
          ></i>

          {/* delete task */}
          <i
            className="fa-solid fa-trash cursor-pointer"
            onClick={() => handleDeleteTask(id)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Task;
