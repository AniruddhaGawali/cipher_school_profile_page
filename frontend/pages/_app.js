import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-calendar-heatmap/dist/styles.css";

import { ToastContainer } from "react-toastify";
import UserContext from "../context/userdata";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const res = await fetch("http://localhost:5000/userdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: user._id }),
    });
    const data = await res.json();
    console.log(data);
    setUser(data.data);
  };

  return (
    <>
      <UserContext.Provider value={{ user, setUser, fetchUser }}>
        <Component {...pageProps} />
        <ToastContainer />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
