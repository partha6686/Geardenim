import React from "react";
import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return <p>category: {category}</p>;
};

export default ProductPage;
