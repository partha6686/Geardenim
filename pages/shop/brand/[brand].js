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
          <title>{_.capitalize(brand)} - Geardenim.com</title>
        </Head>
        <div className="bg-cust_light min-h-screen">
          <div className="container mx-auto sm:p-5 ">
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
