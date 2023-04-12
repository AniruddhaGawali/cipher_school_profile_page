import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";

import { toast } from "react-toastify";

import Button from "./button";

import UserContext from "../context/userdata";

const Social = () => {
  const { user, fetchUser } = React.useContext(UserContext);

  const [edit, setEdit] = React.useState(false);
  const [linkedin, setLinkedin] = React.useState(user.social_links.linkedin);
  const [github, setGithub] = React.useState(user.social_links.github);
  const [facebook, setFacebook] = React.useState(user.social_links.facebook);
  const [twitter, setTwitter] = React.useState(user.social_links.twitter);
  const [instagram, setInstagram] = React.useState(user.social_links.instagram);
  const [website, setWebsite] = React.useState(user.social_links.website);

  const updateSocial = async () => {
    if (edit) {
      console.log(user._id);
      const res = await fetch("http://localhost:5000/updateprofile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: user._id,
          aboutme: user.aboutme,
          social: {
            linkedin,
            facebook,
            github,
            twitter,
            instagram,
            website,
          },
          prof_info: user.Professional_info,
        }),
      });

      const data = await res.json();

      if (data.isSuccess) {
        toast.success("Social Updated Successfully");
        fetchUser();
      }
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  return (
    <div className=" text-white p-10">
      <h3 className=" w-full flex justify-between items-center">
        <span className="text-xl font-bold uppercase">ON THE WEB</span>
        <span className="w-20">
          <Button btn_text={edit ? "Save" : "Edit"} func={updateSocial} />
        </span>
      </h3>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:p-10 py-5 ">
        <div className="relative flex w-full ">
          <div className="absolute left-3 top-1/2 text-xl -translate-y-1/2">
            <BsLinkedin className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Linkedin"
            disabled={edit ? false : true}
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="p-2 py-3 pl-10  bg-background text-gray-400 w-full rounded-sm focus-visible:outline-none"
          />
        </div>

        <div className="relative flex w-full ">
          <div className="absolute left-3 top-1/2 text-2xl -translate-y-1/2">
            <AiFillGithub className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Github"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            disabled={edit ? false : true}
            className="p-2 py-3 pl-10  bg-background text-gray-400 w-full rounded-sm focus-visible:outline-none"
          />
        </div>
        <div className="relative flex w-full ">
          <div className="absolute left-3 top-1/2 text-xl -translate-y-1/2">
            <BsFacebook className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Facebook"
            disabled={edit ? false : true}
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            className="p-2 py-3 pl-10  bg-background text-gray-400 w-full rounded-sm focus-visible:outline-none"
          />
        </div>

        <div className="relative flex w-full ">
          <div className="absolute left-3 top-1/2 text-2xl -translate-y-1/2">
            <AiFillTwitterCircle className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Twitter"
            disabled={edit ? false : true}
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            className="p-2 py-3 pl-10  bg-background text-gray-400 w-full rounded-sm focus-visible:outline-none"
          />
        </div>
        <div className="relative flex w-full ">
          <div className="absolute left-3 top-1/2 text-2xl -translate-y-1/2">
            <AiFillInstagram className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Instagram"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            disabled={edit ? false : true}
            className="p-2 py-3 pl-10  bg-background text-gray-400 w-full rounded-sm focus-visible:outline-none"
          />
        </div>
        <div className="relative flex w-full ">
          <div className="absolute left-3 top-1/2 text-2xl -translate-y-1/2">
            <AiOutlineGlobal className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            disabled={edit ? false : true}
            className="p-2 py-3 pl-10  bg-background text-gray-400 w-full rounded-sm focus-visible:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Social;
