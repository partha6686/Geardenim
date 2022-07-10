import React from "react";
import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <p>Post: {slug}</p>;
};

export default Product;
