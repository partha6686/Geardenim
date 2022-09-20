import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import Head from "next/head";
import { toast } from "react-toastify";
import useForm from "../Hooks/useForm";
import { BsInfoCircle } from "react-icons/bs";

const Signup = () => {
  const router = useRouter();
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (getCookie("isLoggedIn") == true) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createAccount = async () => {
    setProcessing(true);
    const response = await fetch(`${process.env.HOST}signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.custName,
        email: values.email,
        password: values.password,
      }),
    });
    const json = await response.json();
    if (response.status === 200) {
      toast.success(json.msg, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "signup-success",
      });
      router.push("/signin");
    } else {
      toast.error(json.error, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "signup-failure",
      });
    }
    setProcessing(false);
  };

  const { handleChange, values, errors, handleSubmit } = useForm(
    {
      custName: "",
      email: "",
      password: "",
      cpassword: "",
    },
    createAccount
  );

  return (
    <div>
      <Head>
        <title>Sign Up - Geardenim.com</title>
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
            Sign up for an account
          </h1>
          <h1 className="text-center mb-10">
            or{" "}
            <Link href={"/signin"}>
              <a className="text-cust_green">Login</a>
            </Link>
          </h1>
          <div className="my-4">
            <input
              className="w-full py-1 border-b-2 border-cust_green focus:outline-none"
              type="text"
              placeholder="Your Name"
              name="custName"
              id="custName"
              autoComplete="off"
              onChange={handleChange}
              value={values.custName}
            />
            {errors.custName && (
              <div className="relative">
                <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                  <BsInfoCircle className=" mr-1 font-bold" /> {errors.custName}
                </div>
              </div>
            )}
          </div>
          <div className="my-4">
            <input
              className="w-full py-1 border-b-2 border-cust_green focus:outline-none"
              type="email"
              placeholder="Your Email"
              name="email"
              id="email"
              autoComplete="off"
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
              autoComplete="new-password"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && (
              <div className="relative h-6">
                <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                  <BsInfoCircle className=" mr-1 font-bold" /> {errors.password}
                </div>
              </div>
            )}
          </div>

          <div className="my-4">
            <input
              className="w-full py-1 border-b-2 border-cust_green focus:outline-none"
              type="password"
              placeholder="Confirm Password"
              name="cpassword"
              id="cpassword"
              autoComplete="off"
              onChange={handleChange}
              value={values.cpassword}
            />
            {errors.cpassword && (
              <div className="relative">
                <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                  <BsInfoCircle className=" mr-1 font-bold" />{" "}
                  {errors.cpassword}
                </div>
              </div>
            )}
          </div>

          <button
            className="my-6 w-full px-10 py-2 bg-cust_green text-white 
      hover:bg-emerald-600 hover:drop-shadow-md duration-300 ease-in disabled:bg-emerald-300 flex justify-center items-center"
            type="submit"
            disabled={
              Object.keys(errors).length !== 0
                ? true
                : processing
                ? true
                : false
            }
          >
            {processing && (
              <Image
                src="/FormSpinner.svg"
                height={25}
                width={25}
                alt="form-spinner"
              />
            )}
            <span> Sign Up</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
