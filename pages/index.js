import Head from "next/head";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BestSellerIndex from "../components/BestSellerIndex";
import BestDealsIndex from "../components/BestDealsIndex";
import Category from "../components/Category";
import BrandsIndex from "../components/BrandsIndex";

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
