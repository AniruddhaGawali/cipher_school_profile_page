import React from "react";
import UserContext from "../context/userdata";

//icons
import { RiUserSmileLine } from "react-icons/ri";

const UserInfo = () => {
  const { user } = React.useContext(UserContext);
  return (
    <div className="relative flex items-center min-[550px]:justify-between justify-center w-full bg-background h-fit text-white px-10 py-3">
      <img
        src="/cover.png"
        alt=""
        class="absolute top-0 left-0 object-cover w-full h-full"
      />
      <div className="relative z-10 flex items-center justify-center">
        <div className="text-4xl bg-primary min-[550px]:p-3 p-1 rounded-full">
          <RiUserSmileLine />
        </div>
        <div className=" flex flex-col items-start min-[550px]:ml-8 ml-5">
          <h3 className=" min-[550px]:text-xl text-lg font-light">Hello,</h3>
          <h2 className="min-[550px]:text-2xl text-xl font-bold">
            {user.user.firstname} {user.user.lastname}
          </h2>
          <h5 className="min-[550px]:text-lg text-sm font-light">
            {user.user.email}
          </h5>
        </div>
      </div>
      <div className="min-[550px]:flex relative z-10 hidden items-center justify-center text-xl">
        {user.followers.length} Followers
      </div>
    </div>
  );
};

export default UserInfo;
