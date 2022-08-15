import React from "react";
import Link from "next/link";
import Image from "next/image";

const Signup = () => {
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
              name="name"
              id="name"
            />
          </div>
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

          <div className="my-4">
            <input
              className="w-full py-1 border-b-2 border-cust_green focus:outline-none"
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              id="confirm_password"
            />
          </div>

          <button
            className="my-4 w-full px-10 py-2 bg-cust_green text-white 
      hover:bg-emerald-600 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
