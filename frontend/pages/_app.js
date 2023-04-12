import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import UserContext from "../context/userdata";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({
    _id: "64356d928faba27cc1ee1702",
    user: {
      firstname: "xyz",
      lastname: "xyz",
      email: "uvw@gmail.com",
      phone: "123456789",
      password: "$2a$10$tokK4Aq2mHTS2iJzxa6DA.0BIzehUkPH4y0ku1SYQgAh8aojoNgDu",
    },
    aboutme: "",
    social_links: {
      facebook: "",
      twitter: "",
      instagram: "",
      linkedin: "",
      github: "",
    },
    Professional_info: {
      highest_education: "",
      current_education: "",
    },
    interests: [],
    followers: [],
    following: [],
  });
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Component {...pageProps} />
        <ToastContainer />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
