import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";

const EditModal = ({
  setShowModal,
  handleChange,
  values,
  errors,
  handleSubmit,
  passC,
}) => {
  const [tab, setTab] = useState(1);
  const handleModalClose = () => {
    setShowModal(false);
    passC.setValues({
      ...passC.values,
      password: "",
      cpassword: "",
      curpassword: "",
    });
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full backdrop-brightness-50 z-30"></div>
      <div className="z-50 fixed top-5 left-0 right-0 m-auto bg-white w-11/12 md:w-4/6 lg:w-1/2 py-4 rounded-lg">
        <div className="flex justify-between items-center mb-2 mx-4">
          <div className="flex divide-x-2 items-baseline">
            <h2
              className={`${
                tab == 2 ? "text-xs text-blue-500" : "text-base font-semibold"
              } pr-2 cursor-pointer`}
              onClick={() => setTab(1)}
            >
              EDIT PROFILE
            </h2>
            <h2
              className={`${
                tab == 1 ? "text-xs text-blue-500" : "text-base font-semibold"
              } pl-2 cursor-pointer`}
              onClick={() => setTab(2)}
            >
              CHANGE PASSWORD
            </h2>
          </div>
          <AiOutlineClose
            className="cursor-pointer text-xl font-bold"
            onClick={handleModalClose}
          />
        </div>
        <hr />
        {tab == 1 ? (
          <div className="tab_1">
            <div className="form px-4 h-[70vh] overflow-y-scroll overflow-x-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="mb-4 mr-4 w-full">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm  text-gray-800"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="custName"
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
                <div className="mb-4 w-full">
                  <label
                    htmlFor="phone"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    value={values.phone}
                  />
                  {errors.phone && (
                    <div className="relative">
                      <div className="absolute top-0 left-0 text-rose-600 text-xs py-1 w-full flex items-center">
                        <BsInfoCircle className=" mr-1 text-bold" />
                        <div>{errors.phone}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4 mr-4 w-full">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-slate-100 rounded border border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={handleChange}
                  value={values.email}
                  readOnly={true}
                />
                {errors.email && (
                  <div className="relative">
                    <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                      <BsInfoCircle className=" mr-1 text-bold" />
                      {errors.email}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col lg:flex-row">
                <div className="mb-4 mr-4 w-full">
                  <label
                    htmlFor="dob"
                    className="leading-7 text-sm  text-gray-800"
                  >
                    Date of Birth (DD/MM/YYYY)
                  </label>
                  <input
                    type="text"
                    id="dob"
                    name="dob"
                    className="w-full bg-white rounded border  border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    value={values.dob}
                  />
                  {errors.dob && (
                    <div className="relative">
                      <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center whitespace-nowrap">
                        <BsInfoCircle className=" mr-1 font-bold" />{" "}
                        {errors.dob}
                      </div>
                    </div>
                  )}
                </div>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="gender"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Gender (M/F/NA)
                  </label>
                  <input
                    type="text"
                    id="gender"
                    name="gender"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    value={values.gender}
                  />
                  {errors.gender && (
                    <div className="relative">
                      <div className="absolute top-0 left-0 text-rose-600 text-xs py-1 w-full flex items-center">
                        <BsInfoCircle className=" mr-1 text-bold" />
                        <div>{errors.gender}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="leading-7 text-sm  text-gray-800"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="w-full h-20 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none"
                  onChange={handleChange}
                  value={values.address}
                ></textarea>
                {errors.address && (
                  <div className="relative">
                    <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                      <BsInfoCircle className=" mr-1 text-bold" />
                      {errors.address}
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-4 mr-4 w-full">
                <label
                  htmlFor="pincode"
                  className="leading-7 text-sm text-gray-800"
                >
                  Pin Code
                </label>
                <input
                  type="tel"
                  id="pincode"
                  name="pincode"
                  className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={handleChange}
                  value={values.pincode}
                />
                {errors.pincode && (
                  <div className="relative">
                    <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                      <BsInfoCircle className=" mr-1 text-bold" />
                      {errors.pincode}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col lg:flex-row">
                <div className="mb-4  mr-4  w-full">
                  <label
                    htmlFor="state"
                    className="leading-7 text-sm text-gray-800"
                  >
                    State
                  </label>
                  <input
                    name="state"
                    id="state"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    value={values.state}
                    readOnly={true}
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="city"
                    className="leading-7 text-sm  text-gray-800"
                  >
                    City/Dist.
                  </label>
                  <input
                    name="city"
                    id="city"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    value={values.city}
                    readOnly={true}
                  />
                </div>
              </div>
            </div>
            <hr />
            <button
              className="px-5 py-2 bg-cust_green text-white mt-4 mx-4 disabled:bg-emerald-300 focus:outline-none hover:bg-emerald-600"
              onClick={handleSubmit}
              disabled={Object.keys(errors).length > 0 ? true : false}
            >
              Edit Details
            </button>
          </div>
        ) : (
          <div className="tab_2">
            <form className="form px-4 max-h-[70vh]" autoComplete="off">
              <div className="mb-4 mr-4 w-full">
                <label
                  htmlFor="curpassword"
                  className="leading-7 text-sm  text-gray-800"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="curpassword"
                  name="curpassword"
                  className="w-full bg-white rounded border  border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={passC.handleChange}
                  value={passC.values.curpassword}
                />
                {passC.errors.curpassword && (
                  <div className="relative">
                    <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                      <BsInfoCircle className=" mr-1 font-bold" />{" "}
                      {passC.errors.curpassword}
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-4 mr-4 w-full">
                <label
                  htmlFor="password"
                  className="leading-7 text-sm  text-gray-800"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border  border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={passC.handleChange}
                  value={passC.values.password}
                />
                {passC.errors.password && (
                  <div className="relative h-4">
                    <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                      <BsInfoCircle className=" mr-1 font-bold" />{" "}
                      {passC.errors.password}
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="cpassword"
                  className="leading-7 text-sm text-gray-800"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={passC.handleChange}
                  value={passC.values.cpassword}
                />
                {passC.errors.cpassword && (
                  <div className="relative h-2">
                    <div className="absolute top-0 left-0 text-rose-600 text-xs py-1 w-full flex items-center">
                      <BsInfoCircle className=" mr-1 text-bold" />
                      <div>{passC.errors.cpassword}</div>
                    </div>
                  </div>
                )}
              </div>
            </form>
            <hr />
            <button
              className="px-5 py-2 bg-cust_green text-white mt-4 mx-4 disabled:bg-emerald-300 focus:outline-none hover:bg-emerald-600"
              onClick={passC.handleSubmit}
              disabled={Object.keys(passC.errors).length !== 0 ? true : false}
            >
              Change Password
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default EditModal;
