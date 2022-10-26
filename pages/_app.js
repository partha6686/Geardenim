import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import CartState from "../store/CartState";
import UserState from "../store/UserState";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "../src/theme/theme";
import FullLayout from "../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import AdminState from "../store/AdminState";

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
  const isAdmin = router.pathname.includes("/admin") ? true : false;
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <UserState>
        {isAdmin ? (
          <AdminState>
            <ThemeProvider theme={theme}>
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
              <FullLayout>
                <Component {...pageProps} />
              </FullLayout>
            </ThemeProvider>
          </AdminState>
        ) : (
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
        )}
      </UserState>
    </>
  );
}

export default MyApp;
