import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/globals.css";
import CartState from "../store/CartState";
import UserState from "../store/UserState";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <ToastContainer
          position="bottom-right"
          theme="colored"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
