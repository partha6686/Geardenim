import React from "react";
import Card from "../../components/Card";

const ProductPage = ({ products }) => {
  return (
    <div className="bg-cust_light">
      <div className="container mx-auto sm:p-5 ">
        <div className="flex flex-wrap">
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
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
