import React, { useEffect } from "react";
import UserContext from "../context/userdata";
import Button from "./button";

import { toast } from "react-toastify";
import Select from "./select";

const Prof_info = () => {
  const { user, fetchUser } = React.useContext(UserContext);

  const [highestEducation, setHighestEducation] = React.useState(
    user.Professional_info.highest_education
  );
  const [currently, setCurrently] = React.useState(
    user.Professional_info.current_education
  );
  const [edit, setEdit] = React.useState(false);

  const Highesteducation = {
    label: "Highest Education",
    options: [
      { value: "Primary", label: "Primary" },
      { value: "Secondary", label: "Secondary" },
      { value: "Graduation", label: "Graduation" },
      { value: "Post Graduation", label: "Post Graduation" },
    ],
  };

  const Currently = {
    label: "What do you do currently?",
    options: [
      { value: "Schooling", label: "Schooling" },
      { value: "College Student", label: "College Student" },
      { value: "Teaching", label: "Teaching" },
      { value: "Job", label: "Job" },
      { value: "Freelancing", label: "Freelancing" },
    ],
  };

  const updateProfInfo = async () => {
    if (edit) {
      const res = await fetch("http://localhost:5000/updateprofile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: user._id,
          aboutme: user.aboutme,
          social: user.social_links,
          prof_info: {
            highest_education: highestEducation,
            current_education: currently,
          },
        }),
      });
      const data = await res.json();
      if (data.isSuccess) {
        toast.success("Updated Professional Information");
      }
      setEdit(false);
      fetchUser();
    } else {
      setEdit(true);
    }
  };

  return (
    <div className=" text-white p-10">
      <h3 className=" w-full flex justify-between items-center ">
        <span className="text-xl font-bold uppercase">
          PROFESSIONAL INFORMATION
        </span>
        <span className="w-20">
          <Button btn_text={edit ? "Save" : "Edit"} func={updateProfInfo} />
        </span>
      </h3>
      <div className=" my-5">
        <div className="flex md:flex-row flex-col w-full justify-center items-center gap-10">
          <Select
            label={Highesteducation.label}
            options={Highesteducation.options}
            disabled={edit ? false : true}
            value={highestEducation}
            onChange={(e) => {
              console.log(e.target.value);
              setHighestEducation(e.target.value);
            }}
            defaultValue={user.Professional_info.highest_education}
          />
          <Select
            label={Currently.label}
            options={Currently.options}
            disabled={edit ? false : true}
            value={currently}
            onChange={(e) => {
              console.log(e.target.value);
              setCurrently(e.target.value);
            }}
            defaultValue={user.Professional_info.current_education}
          />
        </div>
      </div>
    </div>
  );
};

export default Prof_info;
