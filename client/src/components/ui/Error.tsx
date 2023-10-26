interface Props {
  message?: string | undefined;
  onClick?: () => void;
}

const Error = ({ message, onClick }: Props) => {
  return (
    <div
      className="p-4 mb-4 text-sm cursor-pointer text-red-800 rounded-lg bg-red-50"
      role="alert"
      onClick={onClick}
    >
      {message ? message : "There was an error occur! Please try again"}
    </div>
  );
};

export default Error;
