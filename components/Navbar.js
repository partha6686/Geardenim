import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="">
      <div className="mainnav flex justify-between p-2 items-center border-b-2 border-b-cust_green">
        <div className="">
          <Link href="/">
            <a>
              <Image
                src="/logo.jpg"
                alt="geardenim-logo"
                width={200}
                height={50}
              />
            </a>
          </Link>
        </div>
        <div className="hidden sm:flex h-10 mx-5 flex-grow bg-cust_green rounded-md cursor-pointer items-center">
          <input
            className="flex-grow focus:outline-none h-full border-cust_green border-solid border-2 rounded-l-md px-2"
            type="text"
            name="search"
            id="search"
            placeholder="Search for products, brands and more"
          />
          <div className="mx-2">
            <BiSearch className="text-2xl" />
          </div>
        </div>
        <div className="flex">
          <div className="mx-3">
            <Link href="/signin">
              <a>
                <FaUser className="text-xl sm:text-2xl text-cust_dark hover:text-cust_green" />
              </a>
            </Link>
          </div>
          <div className="mx-3">
            <Link href="/cart">
              <a>
                <FiShoppingCart className="text-xl sm:text-2xl text-cust_dark hover:text-cust_green" />
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/*SECONDARY NAV*/}
      <div className="flex justify-start px-5 pt-1 pb-2 space-x-4 sm:space-x-8 bg-cust_light text-cust_dark">
        <div className="hover:font-semibold">
          <Link href="/suits">Suits</Link>
        </div>
        <div className="hover:font-semibold">
          <Link href="/jackets">Jackets</Link>
        </div>
        <div className="hover:font-semibold">
          <Link href="/pants">pants</Link>
        </div>
        <div className="hover:font-semibold">
          <Link href="/gloves">Gloves</Link>
        </div>
        <div className="hover:font-semibold">
          <Link href="/helmets">Helmets</Link>
        </div>
        <div className="hover:font-semibold">
          <Link href="/boots">Boots</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
