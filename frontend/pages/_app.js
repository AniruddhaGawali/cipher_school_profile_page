import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import UserContext from "../context/userdata";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
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
