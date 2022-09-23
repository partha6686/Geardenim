import Head from "next/head";
import React from "react";
import Card from "../components/Card";
import _ from "lodash";
import FourOhFour from "./404";

const BestSellers = ({ products }) => {
  if (products.length == 0) {
    return <FourOhFour />;
  } else {
    return (
      <>
        <Head>
          <title>Best Sellers - Geardenim.com</title>
        </Head>
        <div className="bg-cust_light min-h-screen">
          <div className="container mx-auto sm:p-5 ">
            <h1 className="text-lg sm:text-2xl font-bold mx-1 sm:mx-6 my-2 sm:my-4 text-gray-800">
              BEST SELLERS
            </h1>
            <div className="flex flex-wrap">
              {products.map((product) => (
                <Card key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export async function getServerSideProps() {
  const response = await fetch(`${process.env.HOST}bestsellers`);
  let products = await response.json();
  return {
    props: { products },
  };
}

export default BestSellers;
