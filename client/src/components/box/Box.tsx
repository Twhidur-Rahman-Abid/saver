interface Props {
  bgColor: string;
  title: string;
  number: number;
  icon: string;
}

const Box = ({ bgColor, title, number, icon }: Props) => {
  return (
    <div
      className={`w-[130px] md:w-[150px] h-[60px] md:h-[80px]  rounded-lg bg-${bgColor} flex flex-col justify-between p-2`}
    >
      <div className="">
        <i className={`${icon} p-[3px] md:p-[6px] bg-zircon rounded-full`}></i>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-sm md:text-md font-bold">{title}</h2>
        <p className="font-bold text-md self-end">{number}</p>
      </div>
    </div>
  );
};

export default Box;
