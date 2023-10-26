interface Props {
  buttontext: string;
  classes?: string;
  type?: "submit" | "reset";
  handleClick?: () => void;
  isLoading?: boolean;
}

const Button = ({
  buttontext,
  classes,
  type,
  handleClick,
  isLoading,
}: Props) => {
  return (
    <button
      type={type}
      className={`bg-lightPeriwinkle font-bold px-8 py-2 text-gray-700 rounded-lg  ${classes} `}
      onClick={handleClick}
      disabled={isLoading}
    >
      {buttontext}
    </button>
  );
};

export default Button;
