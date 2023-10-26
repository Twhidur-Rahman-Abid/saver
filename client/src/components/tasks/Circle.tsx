type props = {
  bgColor: string;
  handleFilter: () => void;
};

const Circle = ({ bgColor, handleFilter }: props) => {
  return (
    <div
      className={`w-4 h-4 cursor-pointer ${bgColor} rounded-full`}
      onClick={handleFilter}
    ></div>
  );
};

export default Circle;
