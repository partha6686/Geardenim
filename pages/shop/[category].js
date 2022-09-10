import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Card from "../../components/Card";
import _ from "lodash";

const ProductPage = ({ products }) => {
  const router = useRouter();
  const { category } = router.query;
  return (
    <>
      <Head>
        <title>{_.capitalize(category)} - Geardenim.com</title>
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
};

export async function getServerSideProps(context) {
  const { category } = context.query;
  const response = await fetch(`${process.env.HOST}getproducts/${category}`);
  let products = await response.json();
  return {
    props: { products },
  };
}

export default ProductPage;
