import Head from "next/head";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FiTruck } from "react-icons/fi";
import { BsArrowRepeat } from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";
import { TbHeadset } from "react-icons/tb";

export default function Home() {
  return (
    <div className="bg-cust_light min-h-screen">
      <Head>
        <title>GearDenim.com</title>
        <meta
          name="description"
          content="Geardenim.com - Gear up for the biggest ride of your life"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
        >
          <div className="h-96 w-full relative">
            <Image
              className="object-cover"
              src="/hero-1.jpg"
              alt="hero-suits"
              layout="fill"
            />
          </div>
          <div className="h-96 w-full relative">
            <Image
              className="object-cover"
              src="/hero-2.jpg"
              alt="hero-suits"
              layout="fill"
            />
          </div>
          <div className="h-96 w-full relative">
            <Image
              className="object-cover"
              src="/hero-4.jpg"
              alt="hero-suits"
              layout="fill"
            />
          </div>
        </Carousel>
        <div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
              <div className="text-center mb-10">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-cust_green mb-4">
                  Geardenim
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-cust_light_text">
                  Gear up for the biggest ride of your life with geardenim.com
                </p>
                <div className="flex mt-6 justify-center">
                  <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
              </div>
              <div className="flex flex-wrap flex-col md:flex-row sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div className="p-2 md:w-1/4 flex flex-col text-center items-center">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  bg-cust_green text-cust_white  mb-5 flex-shrink-0">
                    <FiTruck className="text-4xl" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-base title-font font-medium mb-3">
                      Delivery across India
                    </h2>
                  </div>
                </div>
                <div className="p-2 md:w-1/4 flex flex-col text-center items-center">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-cust_green text-cust_white mb-5 flex-shrink-0">
                    <BsArrowRepeat className="text-4xl" />
                  </div>
                  <div className="flex-grow">
                    <h2 className=" text-base title-font font-medium mb-3">
                      Return within 30 DAYS
                    </h2>
                  </div>
                </div>
                <div className="p-2 md:w-1/4 flex flex-col text-center items-center">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-cust_green text-cust_white mb-5 flex-shrink-0">
                    <TbDiscount2 className="text-4xl" />
                  </div>
                  <div className="flex-grow">
                    <h2 className=" text-base title-font font-medium mb-3">
                      Best Discounts
                    </h2>
                  </div>
                </div>
                <div className="p-2 md:w-1/4 flex flex-col text-center items-center">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-cust_green text-cust_white mb-5 flex-shrink-0">
                    <TbHeadset className="text-4xl" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-base title-font font-medium mb-3">
                      24/7 Customer Service
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
