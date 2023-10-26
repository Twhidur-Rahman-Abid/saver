import { useGetTaskQuery } from "../../features/task/taskApi";
import useGetUser from "../../hooks/useGetUser";
import { TaskType } from "../../type/type";
import Box from "./Box";

const Boxes = () => {
  const { id } = useGetUser() || {};

  const { data: task } = useGetTaskQuery(id);

  // Find date, total task, completed tasks and uncompleted tasks
  const date = new Date().getDate();
  const total = task?.length || 0;
  const completedTask =
    task?.filter((t: TaskType) => t.is_complete).length || 0;
  const uncompletedTask = total - completedTask || 0;

  return (
    <div className="flex py-3 gap-6 md:gap-10 flex-wrap justify-between md:justify-end">
      {/* Date box */}
      <Box
        title="Date"
        number={date}
        bgColor="lightLilac"
        icon="fa-solid fa-calendar-days"
      />
      {/* Total task box */}
      <Box
        title="Total"
        number={total}
        bgColor="mintTulip"
        icon="fa-solid fa-rotate"
      />
      {/* Completed task box */}
      <Box
        title="Completed"
        number={completedTask}
        bgColor="lightPeriwinkle"
        icon="fa-solid fa-circle-check"
      />
      {/* Uncomplete task box */}
      <Box
        title="Uncompleted"
        number={uncompletedTask}
        bgColor="cornYellow"
        icon="fa-solid fa-border-all"
      />
    </div>
  );
};

export default Boxes;
