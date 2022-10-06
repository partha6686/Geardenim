import React from "react";
import CardCircle from "./CardCircle";
import UnderLine from "./UnderLine";

const Category = () => {
  return (
    <div className="w-full bg-emerald-100">
      <div className="container mx-auto sm:p-5 py-4 my-4">
        <h1 className="text-xl sm:text-3xl font-bold mx-1 sm:mx-6 mt-4 text-gray-800 text-center">
          TOP CATEGORIES
        </h1>
        <UnderLine />
        <div className="flex flex-wrap justify-evenly my-8 sm:my-14">
          <CardCircle
            link="/shop/suits"
            title="racing suits"
            imgsrc="/suits-cat.jpeg"
            clr="border-cust_green"
          />
          <CardCircle
            link="/shop/jackets"
            title="riding jackets"
            imgsrc="/jackets-cat.jpeg"
            clr="border-orange-400"
          />
          <CardCircle
            link="/shop/pants"
            title="riding pants"
            imgsrc="/pants-cat.jpeg"
            clr="border-amber-400"
          />
          <CardCircle
            link="/shop/gloves"
            title="gloves"
            imgsrc="/gloves-cat.jpeg"
            clr="border-cust_green"
          />
          <CardCircle
            link="/shop/helmets"
            title="helmets"
            imgsrc="/helmets-cat.jpeg"
            clr="border-orange-400"
          />
          <CardCircle
            link="/shop/boots"
            title="boots"
            imgsrc="/boots-cat.jpeg"
            clr="border-amber-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
