import React, { useState } from "react";
import { omit } from "lodash";

const useForm = (callback) => {
    const [values, setValues] = useState({
        custName: "",
        phone: "",
        address: "",
        pincode: "",
        city: "",
        state: "",
    });
    const [errors, setErrors] = useState({
        custName: "",
        phone: "",
        address: "",
        pincode: "",
        city: "",
        state: "",
    });

    const validate = (event, name, value) => {
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
                if (!new RegExp(/^(\d{4}|\d{6})$/).test(value.trim())) {
                    setErrors({
                        ...errors,
                        pincode: "Enter a valid pincode",
                    });
                } else {
                    let newObj = omit(errors, "pincode");
                    setErrors(newObj);
                }
                break;
            case "city":
                if (value.trim().length == 0) {
                    setErrors({
                        ...errors,
                        city: "City can not be empty.",
                    });
                } else {
                    let newObj = omit(errors, "city");
                    setErrors(newObj);
                }
                break;
            case "state":
                if (value.trim().length == 0) {
                    setErrors({
                        ...errors,
                        state: "State can not be empty.",
                    });
                } else {
                    let newObj = omit(errors, "state");
                    setErrors(newObj);
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

            default:
                break;
        }
    };

    //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event, name, val);
        //Let's set these values in state

        setValues({
            ...values,
            [name]: val,
        });
    };

    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            callback();
        } else {
            alert("There is an Error!");
        }
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
    };
};

export default useForm;
