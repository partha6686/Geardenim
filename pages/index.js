import Head from "next/head";
import Image from "next/image";
import BestSellerIndex from "../components/BestSellerIndex";
import BestDealsIndex from "../components/BestDealsIndex";
import Category from "../components/Category";
import BrandsIndex from "../components/BrandsIndex";
import Link from "next/link";

export default function Home({ deals, best }) {
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
        <div className="bg-[url('/hero-1.jpg')] sm:bg-[url('/hero-2.jpg')] bg-no-repeat bg-center md:bg-none md:flex max-w-[1600px] m-auto">
          <div className="md:w-1/2">
            <div className="p-12 lg:p-16 font-['Josefin_Sans'] backdrop-brightness-50 md:bg-emerald-100">
              <h1 className="text-3xl lg:text-4xl font-bold py-8 uppercase max-w-sm text-white md:text-cust_dark">
                Gear up for the biggest ride of your life
              </h1>
              <div className="my-8">
                <h3 className="text-white md:text-cust_light_text font-light lg:text-lg pt-8">
                  SHOP OUR LATEST COLLECTIONS
                </h3>

                <Link href="/new-releases">
                  <button className="text-xs tracking-widest lg:text-base px-7 pb-2 pt-3 font-semibold text-white bg-cust_green hover:bg-emerald-500 mt-2 mb-6 transition duration-500 ease-in-out">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <Image
              src="/hero.jpg"
              alt="hero-suits"
              layout="fill"
              objectFit="cover"
              className=" w-full h-full"
            />
          </div>
        </div>

        <div>
          <BestSellerIndex products={best} />
          <Category />
          <BestDealsIndex products={deals} />
          <BrandsIndex />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const response1 = await fetch(`${process.env.HOST}deals`);
  let deals = await response1.json();
  deals = deals.slice(0, 4);
  const response2 = await fetch(`${process.env.HOST}bestsellers`);
  let best = await response2.json();
  best = best.slice(0, 4);
  return {
    props: { deals, best },
  };
}
