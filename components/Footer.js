import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-cust_light_text body-font border-t-4 border-cust_light ">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href="/">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <Image
                  src="/logo.jpg"
                  alt="geardenim-logo"
                  width={200}
                  height={50}
                />
              </a>
            </Link>
            <p className="mt-2 text-sm text-gray-500 pl-4">
              Geardenim.com - Gear up for the biggest ride of your life
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-cust_dark tracking-widest text-sm mb-3">
                SHOP
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/shop/suits">
                    <a className="text-cust_light_text hover:text-cust_green">
                      Suits
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/jackets">
                    <a className="text-cust_light_text hover:text-cust_green">
                      Jackets
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/pants">
                    <a className="text-cust_light_text hover:text-cust_green">
                      Pants
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/helmets">
                    <a className="text-cust_light_text hover:text-cust_green">
                      Helmets
                    </a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-cust_dark tracking-widest text-sm mb-3">
                POLICY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/">
                    <a className="text-cust_light_text hover:text-cust_green">
                      Privacy Policy
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-cust_light_text hover:text-cust_green">
                      Return Policy
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-cust_light_text hover:text-cust_green">
                      T&C
                    </a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-cust_dark tracking-widest text-sm mb-3">
                CUSTOMER SERVICE
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/contactus">
                    <a className="text-cust_light_text hover:text-cust_green">
                      Contact Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="text-cust_light_text hover:text-cust_green">
                      About Us
                    </a>
                  </Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <Image
                src="/secure_payment.jpg"
                alt="razorpay-secure-payment"
                height={120}
                width={220}
              />
            </div>
          </div>
        </div>
        <div className="bg-cust_light">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2022 Geardenim.com — All Rights Reserved
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <Link href="/">
                <a className="text-cust_dark hover:text-cust_green">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
              </Link>
              <Link href="/">
                <a className="ml-3 text-cust_dark hover:text-cust_green">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
              </Link>
              <Link href="/">
                <a className="ml-3 text-cust_dark hover:text-cust_green">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </Link>
              <Link href="/">
                <a className="ml-3 text-cust_dark hover:text-cust_green">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
