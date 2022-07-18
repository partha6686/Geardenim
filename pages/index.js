import Head from "next/head";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <div>
      <Head>
        <title>GearDenim</title>
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
      </div>
    </div>
  );
}
