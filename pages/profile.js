import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { UserContext } from "../store/UserState";
import EditModal from "../components/EditModal";
import useForm from "../Hooks/useForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const Profile = () => {
  const router = useRouter();
  const userCtx = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (getCookie("isLoggedIn") !== true) {
      router.push("/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (showModal) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "scroll";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);

  const handleEdit = async () => {
    let data = {
      name: values.custName,
      gender: values.gender,
      address: values.address,
      pincode: values.pincode,
      phone: values.phone,
      dob: values.dob,
    };
    let response = await fetch(`${process.env.HOST}updateuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: document.cookie,
      },
      body: JSON.stringify(data),
    });
    let json = await response.json();
    if (response.status == 200) {
      setShowModal(false);
      userCtx.fetchUser();
      toast.success(json.msg, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "profile-update-success",
      });
    } else {
      toast.error(json.error, {
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

  const handlePassC = async () => {
    // console.log("Chnage Password");
    let data = {
      curpassword: passC.values.curpassword,
      password: passC.values.password,
      cpassword: passC.values.cpassword,
    };
    let response = await fetch(`${process.env.HOST}updatepassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: document.cookie,
      },
      body: JSON.stringify(data),
    });
    let json = await response.json();
    if (response.status == 200) {
      setShowModal(false);
      toast.success(json.msg, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "profile-update-success",
      });
      passC.setValues({
        ...passC.values,
        password: "",
        cpassword: "",
        curpassword: "",
      });
    } else {
      toast.error(json.error, {
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
      gender: "",
      address: "",
      pincode: "",
      phone: "",
      dob: "",
      city: "",
      state: "",
    },
    handleEdit
  );
  const passC = useForm(
    {
      curpassword: "",
      password: "",
      cpassword: "",
    },
    handlePassC
  );
  return (
    <>
      <Head>
        <title>Profile - Geardenim.com</title>
      </Head>
      <div className="bg-cust_light min-h-screen">
        {showModal && (
          <EditModal
            setShowModal={setShowModal}
            handleChange={handleChange}
            values={values}
            errors={errors}
            handleSubmit={handleSubmit}
            passC={passC}
          />
        )}
        <div className="container mx-auto lg:px-24 py-4">
          <h1 className="text-2xl font-bold mt-4 mx-2">PROFILE DETAILS</h1>
          <div className="bg-white p-2 md:p-6 shadow-lg my-8 rounded-lg m-2">
            <div className="flex flex-col md:flex-row mb-1">
              <div className="w-full md:w-7/12">
                <h2 className="text-lg font-semibold mb-2">
                  1. General Information
                </h2>
                <table className="mx-4 border-separate border-spacing-y-4 ">
                  <tbody>
                    <tr>
                      <td className="pr-12 font-semibold ">Full Name: </td>
                      <td>{userCtx.user.name && userCtx.user.name}</td>
                    </tr>
                    <tr>
                      <td className="pr-12 font-semibold ">Email: </td>
                      <td>{userCtx.user.email && userCtx.user.email}</td>
                    </tr>
                    <tr>
                      <td className="pr-12 font-semibold ">Mobile Number: </td>
                      <td>
                        {userCtx.user.phone
                          ? userCtx.user.phone
                          : "--Not Set--"}
                      </td>
                    </tr>
                    <tr>
                      <td className="pr-12 font-semibold ">DOB: </td>
                      <td>
                        {" "}
                        {userCtx.user.dob ? userCtx.user.dob : "--Not Set--"}
                      </td>
                    </tr>
                    <tr>
                      <td className="pr-12 font-semibold ">Gender: </td>
                      <td>
                        {" "}
                        {userCtx.user.gender
                          ? userCtx.user.gender
                          : "--Not Set--"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-lg font-semibold mb-2">2. Address</h2>
                {userCtx.user.address ? (
                  <div className="max-w-md mx-4">
                    {userCtx.user.address && userCtx.user.address}
                    <br />
                    {userCtx.user.city && `${userCtx.user.city},`}
                    <br />
                    {userCtx.user.state && `${userCtx.user.state}-`}
                    {userCtx.user.pincode && userCtx.user.pincode}
                  </div>
                ) : (
                  <div className="max-w-md h-24 border-dashed border-cust_green border-2 flex items-center justify-center text-cust_green mx-4">
                    Add you Address
                  </div>
                )}
              </div>
            </div>
            <hr />
            <button
              className="px-5 py-2 bg-cust_green text-white mt-4"
              onClick={() => setShowModal(true)}
            >
              Edit Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
