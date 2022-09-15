import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import Head from "next/head";
import useForm from "../Hooks/useForm";
import { BsInfoCircle } from "react-icons/bs";
import { toast } from "react-toastify";

const Forgot = () => {
  const router = useRouter();
  const [processing, setProcessing] = useState(false);
  const [sentMial, setSentMail] = useState(false);
  useEffect(() => {
    if (getCookie("isLoggedIn") == true) {
      router.push("/");
    }
  }, []);

  const sendResetMail = async () => {
    setProcessing(true);
    let data = {
      email: mailF.values.email,
      sendMail: true,
    };
    let response = await fetch(`${process.env.HOST}forgot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let json = await response.json();
    if (response.status == 200) {
      toast.success(json.msg, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "profile-update-success",
      });
      setSentMail(true);
    } else {
      toast.error(json.error, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "profile-update-failure",
      });
    }
    setProcessing(false);
  };

  const handlePassC = async () => {
    let data = {
      password: passC.values.password,
      token: router.query.token,
      sendMail: false,
    };
    let response = await fetch(`${process.env.HOST}forgot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let json = await response.json();
    if (response.status == 200) {
      toast.success(json.msg, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "profile-update-success",
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
        toastId: "profile-update-failure",
      });
    }
  };

  const mailF = useForm({ email: "" }, sendResetMail);
  const passC = useForm({ password: "", cpassword: "" }, handlePassC);

  return (
    <div>
      <Head>
        <title>Forgot Password - Geardenim.com</title>
      </Head>
      <div className="h-screen flex justify-center items-center bg-gray-50">
        <div className="w-11/12 sm:w-4/6 md:w-3/6 max-w-md px-6 sm:px-10 py-10 bg-white rounded-xl drop-shadow-lg">
          <div className="text-center mb-4">
            <Image
              src="/fav_geardenim_1.jpg"
              alt="geardenim-logo"
              width={130}
              height={100}
            />
          </div>
          {!sentMial && (
            <>
              <h1 className="text-center text-2xl font-semibold">
                Forgot password
              </h1>
              <h1 className="text-center mb-10">
                or{" "}
                <Link href={"/signin"}>
                  <a className="text-cust_green">Login</a>
                </Link>
              </h1>
            </>
          )}
          {!sentMial ? (
            <>
              {!router.query.token ? (
                <form autoComplete="off">
                  <div className="my-4">
                    <input
                      className="w-full py-1 border-b-2 border-cust_green focus:outline-none"
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      id="email"
                      onChange={mailF.handleChange}
                      value={mailF.values.email}
                    />
                    {mailF.errors.email && (
                      <div className="relative">
                        <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                          <BsInfoCircle className=" mr-1 font-bold" />{" "}
                          {mailF.errors.email}
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    className="my-8 w-full px-10 py-2 bg-cust_green text-white 
      hover:bg-emerald-600 hover:drop-shadow-md duration-300 ease-in flex justify-center items-center disabled:bg-emerald-300"
                    type="submit"
                    onClick={mailF.handleSubmit}
                    disabled={
                      Object.keys(mailF.errors).length !== 0
                        ? true
                        : processing
                        ? true
                        : false
                    }
                  >
                    {processing && (
                      <Image src="/FormSpinner.svg" height={30} width={30} />
                    )}
                    {processing ? "Processing..." : "Continue"}
                    {!processing && (
                      <HiOutlineArrowNarrowRight className="ml-2" />
                    )}
                  </button>
                </form>
              ) : (
                <form autoComplete="off" aria-autocomplete="off">
                  <div className="form px-4">
                    <div className="mb-4 mr-4 w-full">
                      <input
                        placeholder="New Password"
                        type="password"
                        id="password"
                        name="password"
                        className="w-full py-1 border-b-2 border-cust_green focus:outline-none"
                        onChange={passC.handleChange}
                        value={passC.values.password}
                      />
                      {passC.errors.password && (
                        <div className="relative h-6">
                          <div className="absolute top-0 left-0 text-rose-600 text-xs pt-1 w-full flex items-start">
                            <BsInfoCircle className=" mr-1 font-bold text-lg" />{" "}
                            {passC.errors.password}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mb-4 w-full">
                      <input
                        placeholder="Confirm New Password"
                        type="password"
                        id="cpassword"
                        name="cpassword"
                        className="w-full py-1 border-b-2 border-cust_green focus:outline-none"
                        onChange={passC.handleChange}
                        value={passC.values.cpassword}
                      />
                      {passC.errors.cpassword && (
                        <div className="relative">
                          <div className="absolute top-0 left-0 text-rose-600 text-xs py-1 w-full flex items-center">
                            <BsInfoCircle className=" mr-1 text-bold" />
                            <div>{passC.errors.cpassword}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    className="px-5 py-2 bg-cust_green text-white mt-4 mx-4 disabled:bg-emerald-300 hover:bg-emerald-600 hover:drop-shadow-md duration-300 ease-in"
                    onClick={passC.handleSubmit}
                    disabled={Object.keys(passC.errors).length !== 0}
                  >
                    Change Password
                  </button>
                </form>
              )}
            </>
          ) : (
            <div className="text-center my-12">
              <h3 className="text-cust_green text-xl font-semibold mb-6">
                You may close this window now.
              </h3>
              <p className="text-gray-700 my-8">
                Password reset email have been sent to your email. Please check
                your mail and reset your password.
              </p>
              <p>Did not receive mail?</p>
              <div
                onClick={!processing ? sendResetMail : () => {}}
                className={`${
                  !processing ? "text-cust_green" : "text-gray-300"
                } cursor-pointer`}
              >
                {processing ? "Processing..." : "Resend"}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Forgot;
