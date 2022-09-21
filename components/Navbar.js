import React, { useState, useRef, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { CartContext } from "../store/CartState";
import { UserContext } from "../store/UserState";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    cartCtx.getCart();
    if (getCookie("isLoggedIn") == true) {
      userCtx.setIsLoggedIn(true);
    } else {
      userCtx.setIsLoggedIn(false);
    }
    userCtx.fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCookie("isLoggedIn")]);

  useEffect(() => {
    setSidebar(false);
    if (ref.current.classList.contains("-translate-x-0")) {
      ref.current.classList.remove("-translate-x-0");
      ref.current.classList.add("-translate-x-full");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  const ref = useRef();
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
    if (ref.current.classList.contains("-translate-x-full")) {
      ref.current.classList.remove("-translate-x-full");
      ref.current.classList.add("-translate-x-0");
    } else {
      ref.current.classList.remove("-translate-x-0");
      ref.current.classList.add("-translate-x-full");
    }
  };

  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-20 shadow-lg">
        <div className="mainnav flex justify-between p-2 items-center bg-cust_white">
          <div className="">
            <Link href="/">
              <a>
                <Image
                  src="/logo.jpg"
                  alt="geardenim-logo"
                  width={160}
                  height={45}
                />
              </a>
            </Link>
          </div>
          <div className="hidden sm:flex h-10 mx-5 flex-grow bg-cust_green rounded-md cursor-pointer items-center">
            <input
              className="flex-grow focus:outline-none h-full bg-gray-200 rounded-l-md px-2"
              type="text"
              name="search"
              id="search"
              placeholder="Search for products, brands and more"
            />
            <div className="mx-2">
              <BiSearch className="text-2xl" />
            </div>
          </div>
          <div className="flex relative">
            <div
              className="bg-transparent absolute -top-2 left-0 w-12 h-14 z-40 cursor-pointer"
              onMouseMove={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            ></div>
            <div className="mx-3 relative">
              <div className="cursor-pointer relative ">
                <AiOutlineUser className="text-xl mx-auto " />
                <p className="font-bold text-xs">Profile</p>
              </div>
              {dropdown && (
                <div
                  className={
                    "bg-white border border-cust_green absolute top-12 -right-4 w-52 py-2 rounded-md shadow-[0_0_20px_-5px_rgb(0,0,0,0.1)] outline-offset-0 text-gray-600"
                  }
                  onMouseMove={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <div className="border-b-2 border-emerald-100 px-4 pb-2 cursor-pointer">
                    {userCtx.isLoggedIn && userCtx.user ? (
                      <Link href={"/profile"} passHref={true}>
                        <div>
                          <div className="font-semibold text-black">
                            Hello{" "}
                            {userCtx.user &&
                              userCtx.user.name &&
                              userCtx.user.name.split(" ")[0]}
                          </div>
                          <div className="text-sm leading-3">
                            {userCtx.user &&
                              userCtx.user.email &&
                              userCtx.user.email}
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div>
                        <div className="font-semibold text-black">Welcome</div>
                        <div className="text-sm leading-3 cursor-pointer">
                          To access account and manage orders
                        </div>
                        <Link href="/signin">
                          <div className="text-sm font-semibold px-2 py-1 mt-2 border-2  text-cust_green hover:border-cust_green inline-block">
                            LOGIN / SIGNUP
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link href={"/orders"}>
                    <div className="px-4 hover:bg-cust_green hover:text-white  leading-8 cursor-pointer">
                      Orders
                    </div>
                  </Link>
                  <Link href={"/cart"}>
                    <div className="px-4 hover:bg-cust_green hover:text-white  leading-8 cursor-pointer">
                      Cart
                    </div>
                  </Link>
                  <Link href={"/contactus"}>
                    <div className="px-4 hover:bg-cust_green hover:text-white border-b-2 border-emerald-100 leading-8 cursor-pointer">
                      Contact Us
                    </div>
                  </Link>

                  <Link href={"/todo"}>
                    <div className="px-4 hover:bg-cust_green hover:text-white  leading-8 cursor-pointer">
                      Coupons
                    </div>
                  </Link>
                  <Link href={"/todo"}>
                    <div className="px-4 hover:bg-cust_green hover:text-white  leading-8 cursor-pointer">
                      Saved Addresses
                    </div>
                  </Link>
                  <Link href={"/todo"}>
                    <div className="px-4 hover:bg-cust_green hover:text-white leading-8 cursor-pointer">
                      Saved Cards
                    </div>
                  </Link>

                  {userCtx.isLoggedIn && (
                    <div
                      className="px-4 hover:bg-cust_green hover:text-white text-rose-600 font-semibold leading-8 cursor-pointer border-t-2 border-emerald-100"
                      onClick={() => userCtx.logout()}
                    >
                      Logout
                    </div>
                  )}
                </div>
              )}
            </div>
            <Link href="/cart">
              <div className="ml-3 mr-5 relative cursor-pointer">
                <div>
                  <FiShoppingCart className="text-xl mx-auto " />
                </div>
                <span className="text-cust_white bg-rose-600 rounded-full text-xs font-semibold absolute px-1 -top-2 left-4">
                  {cartCtx.cart.length}
                </span>
                <p className="font-bold text-xs">Cart</p>
              </div>
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
        <div className="w-full h-full fixed top-0 left-0 backdrop-brightness-50 z-30"></div>
      )}
      <div
        ref={ref}
        className="w-72 sm:w-96 fixed top-0 left-0 bg-cust_white z-50 transform transition-transform -translate-x-full"
      >
        <div className="p-4 bg-cust_green text-cust_white text-2xl font-bold flex items-center justify-between">
          {userCtx.isLoggedIn && userCtx.user ? (
            <h2 className="cursor-pointer">
              Hello,{" "}
              {userCtx.user &&
                userCtx.user.name &&
                userCtx.user.name.split(" ")[0]}
            </h2>
          ) : (
            <h2>Welcome</h2>
          )}
          <AiOutlineClose
            className="cursor-pointer text-3xl"
            onClick={handleSidebar}
          />
        </div>
        <div className="h-screen overflow-scroll pb-14">
          <div className="my-3">
            <h3 className="py-2 my-1 text-xl font-semibold pl-4">Trending</h3>
            <Link href="/todo">
              <div className="py-2 my-1 pl-4 hover:bg-cust_grey cursor-pointer ">
                Best Sellers
              </div>
            </Link>
            <Link href="/todo">
              <div className="py-2 my-1 pl-4 hover:bg-cust_grey cursor-pointer">
                Deals of the week
              </div>
            </Link>
            <Link href="/todo">
              <div className="py-2 my-1 pl-4 hover:bg-cust_grey cursor-pointer">
                New Releases
              </div>
            </Link>
          </div>
          <div className="  my-3">
            <h3 className="py-2 my-1 text-xl font-semibold pl-4">
              Shop by Category
            </h3>
            <Link href="/shop/suits">
              <div className="py-2 my-1 pl-4 hover:bg-cust_grey cursor-pointer">
                Suits
              </div>
            </Link>
            <Link href="/shop/jackets">
              <div className="py-2 my-1 pl-4 hover:bg-cust_grey cursor-pointer">
                Jackets
              </div>
            </Link>
            <Link href="/shop/pants">
              <div className="py-2 my-1 pl-4 hover:bg-cust_grey cursor-pointer">
                Pants
              </div>
            </Link>
            <Link href="/shop/gloves">
              <div className="py-2 my-1 pl-4 hover:bg-cust_grey cursor-pointer">
                Gloves
              </div>
            </Link>
            <Link href="/shop/helmets">
              <div className="py-2 my-1 pl-4 hover:bg-cust_grey cursor-pointer">
                Helmets
              </div>
            </Link>
            <Link href="/shop/boots">
              <div className="py-2 my-1 pl-4 hover:bg-cust_grey cursor-pointer">
                Boots
              </div>
            </Link>
          </div>
          <div className="  my-3">
            <h3 className="py-2 my-1 text-xl font-semibold pl-4">
              Shop by Brands
            </h3>
            <Link href="/todo">
              <div className="py-2 my-1 pl-4 hover:bg-cust_grey cursor-pointer">
                BMW
              </div>
            </Link>
            <Link href="/todo">
              <div className="py-2 my-1 pl-4 hover:bg-cust_grey cursor-pointer">
                KTM
              </div>
            </Link>
            <Link href="/todo">
              <div className="py-2 my-1 pl-4 hover:bg-cust_grey cursor-pointer">
                Kawasaki
              </div>
            </Link>
            <Link href="/todo">
              <div className="py-2 my-1 pl-4 hover:bg-cust_grey cursor-pointer">
                Royal Enfield
              </div>
            </Link>
          </div>
          <div className="  my-3">
            <h3 className="py-2 my-1 text-xl font-semibold pl-4">
              Help & Settings
            </h3>
            <Link href="/profile">
              <div className="py-2 my-1 pl-4 hover:bg-cust_grey cursor-pointer">
                Your Account
              </div>
            </Link>
            <Link href="/orders">
              <div className="py-2 my-1 pl-4 hover:bg-cust_grey cursor-pointer">
                Your Orders
              </div>
            </Link>
            <Link href="/contactus">
              <div className="py-2 my-1 pl-4 hover:bg-cust_grey cursor-pointer">
                Customer Service
              </div>
            </Link>
            {userCtx.isLoggedIn ? (
              <div
                className="py-2 my-1 pl-4 hover:bg-cust_grey cursor-pointer text-rose-600 font-semibold"
                onClick={() => userCtx.logout()}
              >
                Logout
              </div>
            ) : (
              <Link href="/signin">
                <div className="py-2 my-1 pl-4 hover:bg-cust_grey cursor-pointer text-cust_green">
                  Login
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
