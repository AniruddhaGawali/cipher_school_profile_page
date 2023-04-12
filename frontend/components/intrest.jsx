import React from "react";
import Button from "./button";

import UserContext from "../context/userdata";

import { toast } from "react-toastify";

const Intrest = () => {
  const { user, fetchUser } = React.useContext(UserContext);
  const [edit, setEdit] = React.useState(false);
  const [userIntrest, setUserIntrest] = React.useState(user.interests);

  const intrests = [
    "App Development",
    "Web Development",
    "Game Development",
    "Data Structures",
    "Programming",
    "Machine Learning",
    "Data Science",
    "Other",
  ];

  const save = async () => {
    const res = await fetch("http://localhost:5000/addintrest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: user._id,
        intrests: userIntrest,
      }),
    });

    const data = await res.json();

    if (!data.isSuccess) {
      toast.error(data.error);
    } else {
      toast.success("Intrests Updated");
      setEdit(false);
      await fetchUser();
    }
  };

  return (
    <>
      <div className=" text-white p-10">
        <h3 className=" w-full flex justify-between items-center">
          <span className="text-xl font-bold uppercase">INTERESTS</span>
          <span className="w-20">
            <Button
              btn_text={edit ? "Save" : "Edit"}
              func={() => {
                setEdit(!edit);
              }}
            />
          </span>
        </h3>

        <div className="mt-5 flex gap-5 flex-wrap">
          {userIntrest.map((intrest) => {
            return (
              <div className="flex justify-between items-center bg-[#f3902e2a] w-fit px-4 py-2 rounded-lg ">
                <div className="text-sm text-[#f3902e]">{intrest}</div>
              </div>
            );
          })}
        </div>
      </div>
      {/* text-[#f3902e] */}

      {edit ? (
        <div className="fixed top-1/2 left-1/2 -translate-y-1/2 backdrop-blur-sm -translate-x-1/2 h-full w-full z-50 bg-[#0007] text-white">
          <div className="p-5 bg-background sm:w-[500px] sm:h-[390px] w-[350px] h-[480px] rounded-md absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="grid grid-cols-2 gap-8">
              {intrests.map((intrest) => {
                return (
                  <div
                    className={`flex justify-between items-center ] w-full h-fit  p-3 rounded-lg cursor-pointer ${
                      userIntrest.includes(intrest)
                        ? "bg-[#f3902e2a]"
                        : "bg-[#00000087]"
                    }
                    ${
                      userIntrest.includes(intrest)
                        ? "text-[#f3902e]"
                        : "text-white"
                    }

                `}
                    onClick={() => {
                      if (userIntrest.includes(intrest)) {
                        setUserIntrest(
                          userIntrest.filter((item) => item !== intrest)
                        );
                      } else {
                        setUserIntrest([...userIntrest, intrest]);
                      }
                    }}
                  >
                    <div className="text-sm ">{intrest}</div>
                  </div>
                );
              })}
            </div>
            <div className="flex mt-10 gap-5 justify-between items-center">
              <Button
                btn_text="Cancel"
                style={{ background: "white", color: "black" }}
                func={() => setEdit(false)}
              />
              <Button btn_text="Save" func={save} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Intrest;
