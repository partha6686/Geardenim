import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineLogin } from "react-icons/ai";

const Signin = () => {
  return (
    <div>
      <div className="h-screen flex justify-center items-center bg-gray-50">
        <form
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
            />
          </div>
          <div className="my-4">
            <input
              className="w-full py-1 border-b-2 border-cust_green focus:outline-none"
              type="password"
              placeholder="Your Password"
              name="password"
              id="password"
            />
          </div>

          <div className="flex justify-start items-center ">
            <input type="checkbox" name="remember" id="remember" />
            <label className="text-sm text-gray-500 ml-1" htmlFor="remember">
              Remember me
            </label>
          </div>

          <button
            className="my-4 w-full px-10 py-2 bg-cust_green text-white 
          hover:bg-emerald-600 hover:drop-shadow-md duration-300 ease-in flex justify-center items-center"
            type="submit"
          >
            Sign In
            <AiOutlineLogin className="ml-2" />
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
