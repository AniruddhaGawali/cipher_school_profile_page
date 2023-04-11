import React, { useState } from "react";
import Button from "./button";

// icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signup = ({ login }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="bg-background w-screen h-screen text-white">
      <div className="flex flex-col items-center justify-center h-full p-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl">Signin</h1>
        </div>

        <div className="flex items-center justify-center my-5">
          <img className="w-10" src="/logo.png" alt="logo" />
          <span className="text-3xl font-bold capitalize ml-2">
            CipherSchools
          </span>
        </div>

        <span className="t text-gray-300 text-xl">Hey, Welcome!</span>
        <span className="text-sm text-gray-400 text-center">
          Please provide your email and password to signin
        </span>

        <form
          className="flex flex-col items-center justify-center xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-2/3 w-full mt-10"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submitted");
          }}
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-[#15181e] p-2 outline-non placeholder:text-gray-500 focus-visible:outline-none text-lg m-3 rounded-lg pl-3 w-full"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => lastName(e.target.value)}
            className="bg-[#15181e] p-2 outline-non placeholder:text-gray-500  focus-visible:outline-none text-lg m-3 rounded-lg pl-3 w-full"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#15181e] p-2 outline-non placeholder:text-gray-500  focus-visible:outline-none text-lg m-3 rounded-lg pl-3 w-full"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Phone (Optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-[#15181e] p-2 outline-non placeholder:text-gray-500  focus-visible:outline-none text-lg m-3 rounded-lg pl-3 w-full"
          />
          <div className="w-full relative m-3 mb-8">
            {isHidden ? (
              <AiOutlineEye
                className="text-gray-500 text-xl absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setIsHidden(!isHidden)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="text-gray-500 text-xl absolute right-3 top-1/2 focus-visible:outline-none -translate-y-1/2 cursor-pointer"
                onClick={() => setIsHidden(!isHidden)}
              />
            )}
            <input
              type={isHidden ? "password" : "text"}
              name=""
              id=""
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#15181e] p-2 outline-none placeholder:text-gray-500  text-lg rounded-lg pl-3 w-full"
            />
          </div>
          <Button btn_text="Create Account" type="submit" />
        </form>

        <div className="flex items-center justify-center mt-5 text-md">
          <span className="text-gray-200 ">Alredy have an account?</span>
          <span
            className="text-primary ml-2 cursor-pointer"
            onClick={() => login(true)}
          >
            Signin Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
