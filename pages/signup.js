import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.HOST}signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
      }),
    });
    const json = await response.json();
    if (response.status === 200) {
      router.push("/login");
    }
    console.log(json);
  };

  return (
    <div>
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
              name="name"
              id="name"
              onChange={handleChange}
              value={user.name}
            />
          </div>
          <div className="my-4">
            <input
              className="w-full py-1 border-b-2 border-cust_green focus:outline-none"
              type="email"
              placeholder="Your Email"
              name="email"
              id="email"
              onChange={handleChange}
              value={user.email}
            />
          </div>
          <div className="my-4">
            <input
              className="w-full py-1 border-b-2 border-cust_green focus:outline-none"
              type="password"
              placeholder="Your Password"
              name="password"
              id="password"
              onChange={handleChange}
              value={user.password}
            />
          </div>

          <div className="my-4">
            <input
              className="w-full py-1 border-b-2 border-cust_green focus:outline-none"
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              id="confirm_password"
              onChange={handleChange}
              value={user.confirm_password}
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
