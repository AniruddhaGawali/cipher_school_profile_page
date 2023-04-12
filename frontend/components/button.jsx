import React from "react";

const Button = ({ btn_text, func, type, ...other }) => {
  return (
    <button
      {...other}
      className="w-full bg-primary p-2 rounded-lg"
      type={type ? type : ""}
      onClick={func}
    >
      {btn_text}
    </button>
  );
};

export default Button;
