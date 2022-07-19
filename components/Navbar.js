import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <nav className="">
      <div className="mainnav flex justify-between p-2 items-center">
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
            className="flex-grow focus:outline-none h-full bg-cust_gray rounded-l-md px-2"
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
      <div className="flex justify-start px-1 md:px-5 py-1 text-xs sm:text-base space-x-1 bg-cust_green shadow-md">
        <div
          className="px-2 py-1 text-cust_white hover:border-2 hover:border-cust_white border-2 border-cust_green rounded-md flex  items-center cursor-pointer"
          onClick={handleSidebar}
        >
          <HiMenuAlt2 />
          <p className="ml-2">ALL</p>
        </div>
        <div className="px-2 py-1 text-cust_white hover:border-2 hover:border-cust_white border-2 border-cust_green rounded-md">
          <Link href="/shop/suits">SUITS</Link>
        </div>
        <div className="px-2 py-1 text-cust_white hover:border-2 hover:border-cust_white border-2 border-cust_green rounded-md">
          <Link href="/shop/jackets">JACKETS</Link>
        </div>
        <div className="px-2 py-1 text-cust_white hover:border-2 hover:border-cust_white border-2 border-cust_green rounded-md">
          <Link href="/shop/pants">PANTS</Link>
        </div>
        <div className="px-2 py-1 text-cust_white hover:border-2 hover:border-cust_white border-2 border-cust_green rounded-md hidden sm:inline-block">
          <Link href="/shop/gloves">GLOVES</Link>
        </div>
        <div className="px-2 py-1 text-cust_white hover:border-2 hover:border-cust_white border-2 border-cust_green rounded-md hidden sm:inline-block">
          <Link href="/shop/helmets">HELMETS</Link>
        </div>
        <div className="px-2 py-1 text-cust_white hover:border-2 hover:border-cust_white border-2 border-cust_green rounded-md hidden sm:inline-block">
          <Link href="/shop/boots">BOOTS</Link>
        </div>
      </div>

      {/*SIDE NAV*/}
      {sidebar && (
        <div className="w-full h-full fixed top-0 left-0 backdrop-brightness-50 z-30">
          <div className="w-72 sm:w-96 fixed top-0 left-0 bg-cust_white z-50">
            <div className="p-4 bg-cust_green text-cust_white text-2xl font-bold flex items-center justify-between">
              <h2 className="cursor-pointer">Hello, Partha</h2>
              <AiOutlineClose
                className="cursor-pointer text-3xl"
                onClick={handleSidebar}
              />
            </div>
            <div className="h-screen overflow-scroll pb-14">
              <div className="my-3">
                <h3 className="py-2 my-1 text-xl font-semibold pl-4">
                  Trending
                </h3>
                <Link href="/shop/best-sellers">
                  <div className="py-2 my-1 pl-4 hover:bg-cust_gray cursor-pointer ">
                    Best Sellers
                  </div>
                </Link>
                <Link href="/shop/deals-of-the-week">
                  <div className="py-2 my-1 pl-4 hover:bg-cust_gray cursor-pointer">
                    Deals of the week
                  </div>
                </Link>
                <Link href="/shop/new-releases">
                  <div className="py-2 my-1 pl-4 hover:bg-cust_gray cursor-pointer">
                    New Releases
                  </div>
                </Link>
              </div>
              <div className="  my-3">
                <h3 className="py-2 my-1 text-xl font-semibold pl-4">
                  Shop by Category
                </h3>
                <Link href="/shop/suits">
                  <div className="py-2 my-1 pl-4 hover:bg-cust_gray cursor-pointer">
                    Suits
                  </div>
                </Link>
                <Link href="/shop/jackets">
                  <div className="py-2 my-1 pl-4 hover:bg-cust_gray cursor-pointer">
                    Jackets
                  </div>
                </Link>
                <Link href="/shop/pants">
                  <div className="py-2 my-1 pl-4 hover:bg-cust_gray cursor-pointer">
                    Pants
                  </div>
                </Link>
                <Link href="/shop/gloves">
                  <div className="py-2 my-1 pl-4 hover:bg-cust_gray cursor-pointer">
                    Gloves
                  </div>
                </Link>
                <Link href="/shop/helmets">
                  <div className="py-2 my-1 pl-4 hover:bg-cust_gray cursor-pointer">
                    Helmets
                  </div>
                </Link>
                <Link href="/shop/boots">
                  <div className="py-2 my-1 pl-4 hover:bg-cust_gray cursor-pointer">
                    Boots
                  </div>
                </Link>
              </div>
              <div className="  my-3">
                <h3 className="py-2 my-1 text-xl font-semibold pl-4">
                  Shop by Brands
                </h3>
                <Link href="/shop/brand/bmw">
                  <div className="py-2 my-1 pl-4 hover:bg-cust_gray cursor-pointer">
                    BMW
                  </div>
                </Link>
                <Link href="/shop/brand/ktm">
                  <div className="py-2 my-1 pl-4 hover:bg-cust_gray cursor-pointer">
                    KTM
                  </div>
                </Link>
                <Link href="/shop/brand/kawasaki">
                  <div className="py-2 my-1 pl-4 hover:bg-cust_gray cursor-pointer">
                    Kawasaki
                  </div>
                </Link>
                <Link href="/shop/brand/royal-enfield">
                  <div className="py-2 my-1 pl-4 hover:bg-cust_gray cursor-pointer">
                    Royal Enfield
                  </div>
                </Link>
              </div>
              <div className="  my-3">
                <h3 className="py-2 my-1 text-xl font-semibold pl-4">
                  Help & Settings
                </h3>
                <Link href="/profile">
                  <div className="py-2 my-1 pl-4 hover:bg-cust_gray cursor-pointer">
                    Your Account
                  </div>
                </Link>
                <Link href="/myorders">
                  <div className="py-2 my-1 pl-4 hover:bg-cust_gray cursor-pointer">
                    Your Orders
                  </div>
                </Link>
                <Link href="/contactus">
                  <div className="py-2 my-1 pl-4 hover:bg-cust_gray cursor-pointer">
                    Customer Service
                  </div>
                </Link>
                <Link href="/">
                  <div className="py-2 my-1 pl-4 hover:bg-cust_gray cursor-pointer">
                    Sign out
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
