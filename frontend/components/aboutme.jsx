import React, { useEffect } from "react";
import UserContext from "../context/userdata";
import Button from "./button";

import { toast } from "react-toastify";

const AboutMe = () => {
  const { user } = React.useContext(UserContext);

  const [aboutme, setAboutme] = React.useState(user.aboutme);
  const [edit, setEdit] = React.useState(false);

  const updateAboutMe = async () => {
    if (edit) {
      console.log(user._id);
      const res = await fetch("http://localhost:5000/updateprofile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: user._id,
          aboutme,
          social: user.social_links,
          prof_info: user.Professional_info,
        }),
      });

      const data = await res.json();

      if (data.isSuccess) {
        toast.success("About Me Updated");
      }
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  return (
    <div className=" text-white p-10">
      <h3 className=" w-full flex justify-between items-center ">
        <span className="text-xl font-bold uppercase">About Me</span>
        <span className="w-20">
          <Button btn_text={edit ? "Save" : "Edit"} func={updateAboutMe} />
        </span>
      </h3>
      <textarea
        className="bg-background w-full h-40  min-[550px]:m-5 my-5 text-gray-400 p-5 rounded-xl outline-none focus-visible:outline-none"
        placeholder="Add Something About you"
        disabled={edit ? false : true}
        onChange={(e) => setAboutme(e.target.value)}
        value={aboutme}
      />
    </div>
  );
};

export default AboutMe;
