import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

const TransactionSuccess = ({ status, oid }) => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (status == "pending" || getCookie("isLoggedIn") == false) {
      if (getCookie("isLoggedIn") == false) {
        router.push("/signin");
      } else {
        router.push("/");
      }
    }
  }, []);

  return (
    <>
      {status !== "pending" && (
        <div className="bg-gray-50 flex items-center justify-center h-[85vh] min-h-fit">
          <div className="container bg-white mx-auto w-11/12 max-w-lg text-center pt-16 pb-12 rounded-lg shadow-lg">
            <div className="relative text-center w-full h-full">
              <Image
                src="/payment_success.jpg"
                alt="product"
                height={240}
                width={240}
              />
            </div>
            <h1 className="text-lg sm:text-xl font-bold mt-4 mb-1 text-gray-800">
              Your Payment is Successfull
            </h1>
            <p className="text-gray-500 max-w-xs sm:max-w-sm m-auto">
              Thank You for Shopping with us. Your Order has been Processed.
            </p>
            <div className="mt-6 text-cust_green font-semibold hover:underline underline-offset-2">
              <Link href={`/order/${oid}`}>
                <a>Track/view Orders</a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}order?id=${id}`);
  let order = await response.json();

  return {
    props: { status: order.status, oid: order.orderId },
  };
}

export default TransactionSuccess;
