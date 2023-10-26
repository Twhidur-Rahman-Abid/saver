interface Props {
  title: string;
  children: React.ReactNode;
  handleSubmit?: (e: React.FormEvent) => void;
}

const Form = ({ title, children, handleSubmit }: Props) => {
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {/* Form title */}
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              {title}
            </h1>
            {/* form  */}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {children}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
