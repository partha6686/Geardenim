import React from "react";
import { useRouter } from "next/router";
import Card from "../../components/Card";

const ProductPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="bg-cust_light">
      <div className="container mx-auto sm:p-5 ">
        <div className="flex flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
