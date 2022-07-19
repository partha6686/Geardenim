import React from "react";
import { useRouter } from "next/router";

const BrandPage = () => {
  const router = useRouter();
  const { brand } = router.query;

  return <p>Brand: {brand}</p>;
};

export default BrandPage;
