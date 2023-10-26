import { useSelector } from "react-redux";
import { useGetTaskQuery } from "../../features/task/taskApi";

// Import components
import TaskLoader from "../loader/TaskLoader";
import Task from "./Task";
import FilterTask from "./FilterTask";
import useGetUser from "../../hooks/useGetUser";
import { FilterTaskType, TaskType } from "../../type/type";
import Error from "../ui/Error";

const Tasks = () => {
  const { id } = useGetUser() || {};

  const { data, isLoading, isError } = useGetTaskQuery(id);
  const { filter } = useSelector(
    (state: { filter: FilterTaskType }) => state.filter
  );

  // Decide what to render
  let render;

  if (isLoading) {
    render = (
      <div>
        <TaskLoader />
      </div>
    );
  }

  if (isError) render = <Error />;
  if (!isLoading && !isError && data?.length == 0)
    render = <h1>Task not found!</h1>;

  if (!isLoading && !isError && data?.length > 0) {
    render = data
      .filter((task: TaskType) => {
        if (filter === "completed") {
          return task.is_complete;
        } else if (filter === "uncompleted") {
          return !task.is_complete;
        } else {
          return true;
        }
      })
      .map((task: TaskType) => <Task key={task.id} data={task} />);
  }

  return (
    <div className="w-full md:w-[90%] h-[400px] overflow-auto shadow-md">
      <div className="w-full h-[20px]"></div>
      <div className="p-4 ">
        {/* Task header*/}
        <div className="flex justify-between mb-2">
          <h3 className="font-medium">Tasks</h3>
          {/* task filter */}
          <FilterTask />
        </div>
        {/* Main task Task */}
        <div>{render}</div>
      </div>
    </div>
  );
};

export default Tasks;
