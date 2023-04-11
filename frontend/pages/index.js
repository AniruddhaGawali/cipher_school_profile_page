import { useState } from "react";
import Head from "next/head";
import Login from "../components/login";
import Signup from "../components/signup";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <Head>
        <title>Profile | Cipher School </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        {isLogin ? (
          <Login signup={setIsLogin} />
        ) : (
          <Signup login={setIsLogin} />
        )}
      </main>
    </div>
  );
}
