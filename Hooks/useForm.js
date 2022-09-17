import React, { useState, useEffect, useContext } from "react";
import { omit } from "lodash";
import { UserContext } from "../store/UserState";

const useForm = (initObj, callback) => {
  const userCtx = useContext(UserContext);

  const [values, setValues] = useState(initObj);
  const [errors, setErrors] = useState(initObj);

  useEffect(() => {
    if (userCtx.user.name) {
      setValues({
        ...values,
        custName: userCtx.user.name,
        email: userCtx.user.email,
        phone: userCtx.user.phone,
        address: userCtx.user.address,
        pincode: userCtx.user.pincode,
        city: userCtx.user.city ? userCtx.user.city : "",
        state: userCtx.user.state ? userCtx.user.state : "",
        dob: userCtx.user.dob,
        gender: userCtx.user.gender,
      });
      let newObj = omit(errors, [
        userCtx.user.name && "custName",
        userCtx.user.phone && "phone",
        userCtx.user.address && "address",
        userCtx.user.pincode && "pincode",
        userCtx.user.city && "city",
        userCtx.user.state && "state",
      ]);
      setErrors(newObj);
    }
  }, [userCtx.user._id]);

  const validate = async (event, name, value) => {
    switch (name) {
      case "custName":
        if (value.trim().length <= 4) {
          // we will set the error state

          setErrors({
            ...errors,
            custName: "Name must have atleast 5 letters",
          });
        } else {
          // set the error state empty or remove the error for username input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "custName");
          setErrors(newObj);
        }
        break;
      case "phone":
        if (!new RegExp(/^(\d{10})$/).test(value.trim())) {
          setErrors({
            ...errors,
            phone: "Enter a valid phone number",
          });
        } else {
          let newObj = omit(errors, "phone");
          setErrors(newObj);
        }
        break;
      case "address":
        if (value.trim().length == 0) {
          setErrors({
            ...errors,
            address: "Address can not be empty.",
          });
        } else {
          let newObj = omit(errors, "address");
          setErrors(newObj);
        }
        break;
      case "pincode":
        if (!new RegExp(/^(\d{6})$/).test(value.trim())) {
          setErrors({
            ...errors,
            pincode: "Enter a valid pincode",
            state: "",
            city: "",
          });
          setValues({
            ...values,
            city: "",
            state: "",
            [name]: value,
          });
        } else {
          let newObj = omit(errors, "pincode");
          setErrors(newObj);
          setValues({ ...values, [name]: value });
          const pins = await fetch(
            `https://api.postalpincode.in/pincode/${value.trim()}`
          );
          const pinsJson = await pins.json();
          if (pinsJson[0].Status == "Success") {
            setValues({
              ...values,
              city: pinsJson[0].PostOffice[0].District,
              state: pinsJson[0].PostOffice[0].State,
              [name]: value,
            });
            let errObj = omit(errors, ["city", "state", "pincode"]);
            setErrors(errObj);
          } else {
            setErrors({
              ...errors,
              pincode: "Entered pincode is not serviceable.",
              state: "",
              city: "",
            });
            setValues({
              ...values,
              city: "",
              state: "",
              [name]: value,
            });
          }
        }
        break;
      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;
      case "curpassword":
        if (!value.trim()) {
          setErrors({
            ...errors,
            curpassword: "Current Password Can not br Empty",
          });
        } else {
          let newObj = omit(errors, "curpassword");
          setErrors(newObj);
        }
        break;
      case "password":
        if (
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
        ) {
          setErrors({
            ...errors,
            password:
              "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
          });
        } else {
          let newObj = omit(errors, "password");
          setErrors(newObj);
        }
        break;
      case "cpassword":
        if (values.password !== value) {
          setErrors({
            ...errors,
            cpassword: "Password and Confirm Password does not match",
          });
        } else {
          let newObj = omit(errors, "cpassword");
          setErrors(newObj);
        }
        break;
      case "dob":
        if (
          !new RegExp(/^([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4})$/).test(value.trim())
        ) {
          setErrors({
            ...errors,
            dob: "Please enter date in the specified format",
          });
        } else {
          let newObj = omit(errors, "dob");
          setErrors(newObj);
        }
        break;
      case "gender":
        if (!new RegExp(/^([M]{1}|[F]{1}|NA)$/).test(value.trim())) {
          setErrors({
            ...errors,
            gender: "Please enter M , F, or NA.",
          });
        } else {
          let newObj = omit(errors, "gender");
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    //To stop default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);

    if (name !== "pincode") {
      setValues({
        ...values,
        [name]: val,
      });
    }
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    console.log("called");

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    setValues,
  };
};

export default useForm;
