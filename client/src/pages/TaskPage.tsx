import InputTask from "../components/tasks/input/InputTask";
import Tasks from "../components/tasks/Tasks";
import Boxes from "../components/box/Boxes";

const TaskPage = () => {
  return (
    <div className=" mx-auto pt-10 pb-5   ">
      <div className="w-full flex-col-reverse flex  md:flex-row">
        {/* Left side start */}
        <div className="md:basis-3/5">
          <InputTask />
          <Tasks />
        </div>
        {/* Left side end */}

        {/* Right side start */}
        <div className="md:basis-2/5  ">
          <Boxes />
        </div>
        {/* Right side end */}
      </div>
    </div>
  );
};

export default TaskPage;
