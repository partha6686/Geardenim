import React from "react";
import useForm from "../Hooks/useForm";
import { BsInfoCircle } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Contacts = () => {
  const router = useRouter();
  const sendMail = async () => {
    console.log("send mail");
    let response = await fetch(
      `https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_FORMSUBMIT_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.custName,
          email: values.email,
          message: values.message,
          _template: "table",
        }),
        dataType: "json",
      }
    );
    var json = await response.json();
    console.log(json);
    if (json.success == "true") {
      toast.success(
        "Your form has been submited successfully. We will get back to you soon",
        {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "contact-us-success",
        }
      );
      router.back();
    } else {
      toast.error("Sorry! Some unexpected error occured.", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "profile-update-failure",
      });
    }
  };

  const { handleChange, values, errors, handleSubmit } = useForm(
    {
      custName: "",
      email: "",
      message: "",
    },
    sendMail
  );
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Contact Us
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          For all enquires, please mail us using the form below
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <form className="flex flex-wrap -m-2">
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you htmlFor contacting us. We will get back to you soon."
          />
          <input type="hidden" name="_template" value="box" />
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="custName"
                className="w-full bg-white rounded border  border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
                value={values.custName}
              />
              {errors.custName && (
                <div className="relative">
                  <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                    <BsInfoCircle className=" mr-1 font-bold" />{" "}
                    {errors.custName}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border  border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && (
                <div className="relative">
                  <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                    <BsInfoCircle className=" mr-1 font-bold" /> {errors.email}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cust_green focus:bg-white focus:ring-2 focus:ring-cust_light_green h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
                value={values.message}
              ></textarea>
              {errors.message && (
                <div className="relative">
                  <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                    <BsInfoCircle className=" mr-1 font-bold" />{" "}
                    {errors.message}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="p-2 w-full">
            <button
              className="flex mx-auto text-white bg-cust_green border-0 py-2 px-8 focus:outline-none hover:bg-emerald-600 text-lg items-center disabled:bg-emerald-300"
              onClick={handleSubmit}
              disabled={Object.keys(errors).length > 0 ? true : false}
            >
              Send
              <HiOutlineArrowNarrowRight className="ml-2 text-sm" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
