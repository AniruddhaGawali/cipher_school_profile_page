import React from "react";
import UserContext from "../context/userdata";

const AboutMe = () => {
  const { user } = React.useContext(UserContext);

  return (
    <div className="p-10 text-white ">
      <h3 className="text-xl font-bold uppercase">About Me</h3>
      <div className="bg-background w-full h-40 m-5 text-gray-400 p-5 rounded-xl">
        {user.aboutme ? user.aboutme : "Add Something About you"}
      </div>
    </div>
  );
};

export default AboutMe;
