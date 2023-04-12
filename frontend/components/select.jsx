import React from "react";

const Select = ({ label, options, ...rest }) => {
  return (
    <div className="flex flex-col w-full">
      {console.log(rest.value)}
      {label && (
        <label htmlFor={rest.id} className=" text-lg">
          {label}
        </label>
      )}
      <select
        {...rest}
        className="bg-background w-full min-[550px]: my-2  text-gray-400 p-3 px-5 rounded-lg outline-none focus-visible:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
