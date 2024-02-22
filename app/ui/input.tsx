import React from "react";

interface InputProp {
  name: string;
  type: string;
  placeholder?: string;
  label: string;
  required?: boolean;
  readonly?: boolean;
  defaultValue?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({
  name,
  type,
  placeholder,
  label,
  required = false,
  readonly = false,
  defaultValue,
  onChange = () => null,
}: InputProp) => {
  return (
    <div className="flex flex-col items-start">
      <label
        htmlFor={name}
        className="text-xs font-semibold text-start text-neutral-700"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        readOnly={readonly}
        defaultValue={defaultValue}
        onChange={onChange}
        className=" w-full bg-transparent border-[1px] outline-none focus:border-gray-400 rounded-lg text-sm mt-2 font-thin py-2 px-2 "
      />
    </div>
  );
};

export default Input;