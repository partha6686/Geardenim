import React from "react";
import { useRouter } from "next/router";
import Card from "../../../components/Card";

const BrandPage = () => {
  const router = useRouter();
  const { brand } = router.query;

  return (
    <div className="container mx-auto sm:p-5 bg-cust_light">
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
  );
};

export default BrandPage;
