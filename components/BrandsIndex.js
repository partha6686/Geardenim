import React from "react";
import UnderLine from "./UnderLine";
import Image from "next/image";
import Link from "next/link";

const BrandsIndex = () => {
  return (
    <div className="w-full bg-emerald-100">
      <div className="container mx-auto sm:p-5 py-4 mt-4">
        <h1 className="text-xl sm:text-3xl font-bold mx-1 sm:mx-6 mt-4 text-gray-800 text-center font-['Josefin_Sans']">
          TOP BRANDS
        </h1>
        <UnderLine />
        <div className="flex flex-wrap justify-evenly my-8 sm:my-14 space-x-4 items-center">
          <div
            className={`relative overflow-hidden h-16 sm:h-20 w-32 sm:w-32 rounded-lg border-4 border-emerald-100 hover:border-cust_green mx-4 px-6`}
          >
            <Link href="/shop/brand/AXOR">
              <a>
                <Image
                  src={"/axor-helmets-logo.png"}
                  alt="AXOR-LOGO"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </Link>
          </div>
          <div
            className={`relative overflow-hidden h-16 sm:h-20 w-32 sm:w-32 rounded-lg border-4 border-emerald-100 hover:border-orange-400  mx-4 px-6`}
          >
            <Link href="/shop/brand/Forma">
              <a>
                <Image
                  src={"/forma-logo.png"}
                  alt="FORMA-LOGO"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </Link>
          </div>
          <div
            className={`relative overflow-hidden h-16 sm:h-20 w-32 sm:w-32 rounded-lg border-4 border-emerald-100 hover:border-amber-400  mx-4 px-6`}
          >
            <Link href="/shop/brand/Furygan">
              <a>
                <Image
                  src={"/furygan-logo.png"}
                  alt="FURYGAN-LOGO"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </Link>
          </div>
          <div
            className={`relative overflow-hidden h-16 sm:h-20 w-32 sm:w-32 rounded-lg border-4 border-emerald-100 hover:border-cust_green  mx-4 px-6`}
          >
            <Link href="/shop/brand/Royal Enfield">
              <a>
                <Image
                  src={"/re-logo.png"}
                  alt="ROYAL-ENFIELD-LOGO"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </Link>
          </div>
          <div
            className={`relative overflow-hidden h-16 sm:h-20 w-32 sm:w-32 rounded-lg border-4 border-emerald-100 hover:border-orange-400  mx-4 px-6`}
          >
            <Link href="/shop/brand/RS TAICHI">
              <a>
                <Image
                  src={"/rs-taichi-logo.png"}
                  alt="RS_TAICHI-LOGO"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </Link>
          </div>
          <div
            className={`relative overflow-hidden h-16 sm:h-20 w-32 sm:w-32 rounded-lg border-4 border-emerald-100 hover:border-amber-400  mx-4 px-6`}
          >
            <Link href="/shop/brand/Rynox">
              <a>
                <Image
                  src={"/rynox-logo.png"}
                  alt="RYNOX-LOGO"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsIndex;
