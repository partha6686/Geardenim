import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/globals.css";
import CartState from "../store/CartState";
import UserState from "../store/UserState";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, []);

  const showHeader =
    router.pathname === "/signin" ||
    router.pathname === "/signup" ||
    router.pathname === "/forgot"
      ? false
      : true;
  return (
    <UserState>
      <CartState>
        <LoadingBar
          color="#34d399"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          height={2}
        />
        {showHeader && <Navbar />}
        <Component {...pageProps} />
        {showHeader && <Footer />}
      </CartState>
    </UserState>
  );
}

export default MyApp;
