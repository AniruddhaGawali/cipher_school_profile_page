import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordInput = ({ pass, setpass, title }) => {
  const [isHidden, setIsHidden] = React.useState(true);

  return (
    <div className=" my-3 w-full">
      <label htmlFor="" className=" text-lg pl-2">
        {title}
      </label>
      <div className="w-full relative">
        {isHidden ? (
          <AiOutlineEye
            className="text-gray-400 text-xl absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => setIsHidden(!isHidden)}
          />
        ) : (
          <AiOutlineEyeInvisible
            className="text-gray-400 text-xl absolute right-3 top-1/2 focus-visible:outline-none -translate-y-1/2 cursor-pointer"
            onClick={() => setIsHidden(!isHidden)}
          />
        )}
        <input
          type={isHidden ? "password" : "text"}
          name=""
          id=""
          placeholder={title}
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          className="bg-[#15181e] p-2 outline-none mt-2  text-lg rounded-lg pl-3 w-full"
        />
      </div>
    </div>
  );
};

export default PasswordInput;
