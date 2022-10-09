import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Card from "../../../components/Card";
import _ from "lodash";
import FourOhFour from "../../404";

const ProductPage = ({ products }) => {
  const router = useRouter();
  const { brand } = router.query;
  if (products.length == 0) {
    return <FourOhFour />;
  } else {
    return (
      <>
        <Head>
          <title>{brand} - Geardenim.com</title>
        </Head>
        <div className="bg-cust_light min-h-screen">
          <div className="container mx-auto sm:p-5 ">
            <h1 className="m-2 sm:mx-6 my-2">
              <span className="text-cust_light_text">Brand: </span>
              <span className="text-lg font-semibold">{brand}</span>
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

export async function getServerSideProps(context) {
  const { brand } = context.query;
  const response = await fetch(`${process.env.HOST}brand/${brand}`);
  let products = await response.json();
  return {
    props: { products },
  };
}

export default ProductPage;
