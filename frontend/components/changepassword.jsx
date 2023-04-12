import React, { useState } from "react";
import UserContext from "../context/userdata";
import Button from "./button";

import { toast } from "react-toastify";
import PasswordInput from "./passwordinput";
const ChangePassword = () => {
  const { user } = React.useContext(UserContext);

  const [newpassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [edit, setEdit] = React.useState(false);

  const changePassword = async () => {
    if (newpassword !== confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }
    const res = await fetch("http://localhost:5000/changepassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: user._id,
        oldPassword: password,
        newPassword: newpassword,
      }),
    });
    const data = await res.json();
    if (!data.isSuccess) {
      toast.error(data.error);
    } else {
      toast.success("Password Changed");
      setNewPassword("");
      setConfirmPassword("");
      setPassword("");
      setEdit(false);
    }
  };

  return (
    <>
      <div className=" text-white p-10">
        <h3 className=" w-full flex justify-between items-center ">
          <span className="text-xl font-bold uppercase">
            PROFESSIONAL INFORMATION
          </span>
          <span className="w-20">
            <Button
              btn_text={edit ? "Save" : "Edit"}
              func={() => setEdit(!edit)}
            />
          </span>
        </h3>
        <div className=" my-5">
          <div className="flex md:flex-row flex-col w-full justify-center items-center gap-10">
            <div className="relative flex flex-col gap-3 w-full ">
              <label htmlFor="password" className=" text-lg">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                disabled={edit ? false : true}
                value={user.user.password}
                id="password"
                onChange={(e) => setLinkedin(e.target.value)}
                className="p-2 py-3 pl-10  bg-background text-gray-400 w-full rounded-sm focus-visible:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {edit ? (
        <div className="fixed top-1/2 left-1/2 -translate-y-1/2 backdrop-blur-sm -translate-x-1/2 h-full w-full z-50 bg-[#0007] text-white">
          <div className="bg-background sm:w-[500px] sm:h-[420px] w-[350px] h-[480px] rounded-md absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="flex flex-col justify-between items-center p-5">
              <PasswordInput
                pass={password}
                setpass={setPassword}
                title="Old Password"
              />
              <PasswordInput
                pass={newpassword}
                setpass={setNewPassword}
                title="New Password"
              />
              <PasswordInput
                pass={confirmpassword}
                setpass={setConfirmPassword}
                title="Confirm Password"
              />
            </div>
            <div className="flex sm:flex-row flex-col-reverse gap-10 px-5">
              <Button
                btn_text="Cancel"
                style={{ background: "white", color: "black" }}
                func={() => setEdit(false)}
              />
              <Button btn_text="Change Password" func={changePassword} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ChangePassword;
