import { useDispatch } from "react-redux";
import { filterTask } from "../../features/filter/filterSlice";
import Circle from "./Circle";

const FilterTask = () => {
  const dispatch = useDispatch();

  // Handle task filtering based on completed, uncompleted and total
  const handleFilter = (filtertext: string) => {
    dispatch(filterTask(filtertext));
  };

  return (
    <div className="flex gap-4">
      <i className="fa-solid fa-filter"></i>

      {/* filter total tasks */}
      <Circle
        handleFilter={() => handleFilter("total")}
        bgColor="bg-mintTulip"
      />

      {/* filter completed tasks */}
      <Circle
        handleFilter={() => handleFilter("completed")}
        bgColor="bg-lightPeriwinkle"
      />

      {/* filter uncompleted tasks */}
      <Circle
        handleFilter={() => handleFilter("uncompleted")}
        bgColor="bg-cornYellow"
      />
    </div>
  );
};

export default FilterTask;
