interface Props {
  label: string;
  type: string;
  name: string;
  value?: string | number;
  placeholder: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  type,
  name,
  value,
  handleChange,
  placeholder,
}: Props) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
