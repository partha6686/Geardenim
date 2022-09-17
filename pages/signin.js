import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineLogin } from "react-icons/ai";
import { UserContext } from "../store/UserState";
import { getCookie } from "cookies-next";
import Head from "next/head";
import { toast } from "react-toastify";
import useForm from "../Hooks/useForm";
import { BsInfoCircle } from "react-icons/bs";

const Signin = () => {
  const userCtx = useContext(UserContext);
  const router = useRouter();
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (getCookie("isLoggedIn") == true) {
      router.push("/");
    }
  }, []);

  const handleLogin = async () => {
    setProcessing(true);
    const response = await fetch(`${process.env.HOST}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });
    const json = await response.json();
    if (response.status === 200) {
      userCtx.setIsLoggedIn(true);
      toast.success(json.msg, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "login-success",
      });
      router.push("/");
    } else {
      userCtx.setIsLoggedIn(false);
      toast.error(json.error, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "login-failure",
      });
    }
    setProcessing(false);
  };

  const { handleChange, values, errors, handleSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    handleLogin
  );

  return (
    <div>
      <Head>
        <title>Sign In - Geardenim.com</title>
      </Head>
      <div className="h-screen flex justify-center items-center bg-gray-50">
        <form
          onSubmit={handleSubmit}
          className="w-11/12 sm:w-4/6 md:w-3/6 max-w-md px-6 sm:px-10 py-10 bg-white rounded-xl drop-shadow-lg"
          autoComplete="off"
        >
          <div className="text-center mb-4">
            <Image
              src="/fav_geardenim_1.jpg"
              alt="geardenim-logo"
              width={130}
              height={100}
            />
          </div>
          <h1 className="text-center text-2xl font-semibold">
            Sign in to your account
          </h1>
          <h1 className="text-center mb-10">
            or{" "}
            <Link href={"/signup"}>
              <a className="text-cust_green">Sign Up</a>
            </Link>
          </h1>

          <div className="my-4">
            <input
              className="w-full py-1 border-b-2 border-cust_green focus:outline-none"
              type="email"
              placeholder="Your Email"
              name="email"
              id="email"
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && (
              <div className="relative">
                <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                  <BsInfoCircle className=" mr-1 font-bold" /> {errors.email}
                </div>
              </div>
            )}
          </div>
          <div className="my-4">
            <input
              className="w-full py-1 border-b-2 border-cust_green focus:outline-none"
              type="password"
              placeholder="Your Password"
              name="password"
              id="password"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && (
              <div className="relative h-6">
                <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-baseline">
                  <BsInfoCircle className=" mr-1 font-bold" /> {errors.password}
                </div>
              </div>
            )}
          </div>

          <button
            className="my-4 w-full px-10 py-2 bg-cust_green text-white 
          hover:bg-emerald-600 hover:drop-shadow-md duration-300 ease-in flex justify-center items-center disabled:bg-emerald-300"
            type="submit"
            disabled={Object.keys(errors).length !== 0 ? true : false}
          >
            {processing ? (
              <Image src="/FormSpinner.svg" height={25} width={25} />
            ) : (
              <AiOutlineLogin className="mr-2" />
            )}
            Sign In
          </button>

          <p className="text-right text-cust_green">
            <Link
              className=" text-sm font-light hover:underline"
              href="/forgot"
            >
              Forgot Password?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
