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
  value?: string | number;
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
  value,
}: InputProp) => {
  const more_data = value ? { value: value } : {};
  return (
    <div className="flex flex-col items-start">
      {type !== "hidden" && (
        <label
          htmlFor={name}
          className="text-xs font-semibold text-start text-neutral-800"
        >
          {label}
        </label>
      )}
      <input
        {...more_data}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        readOnly={readonly}
        defaultValue={defaultValue}
        onChange={onChange}
        className=" w-full bg-transparent border-[1px] outline-none focus:border-gray-400 rounded-lg text-sm mt-2 font-light py-2 px-2 "
      />
    </div>
  );
};

export default Input;
