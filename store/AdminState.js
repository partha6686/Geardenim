import { createContext } from "react";
import React, { useState } from "react";
import { useRouter } from "next/router";

export const AdminContext = createContext();

const AdminState = (props) => {
  const router = useRouter();
  const [admin, setAdmin] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchAdmin = async () => {
    const response = await fetch(`${process.env.HOST}admin/getadmin`, {
      method: "GET",
      headers: {
        Cookie: document.cookie,
      },
    });
    let json = await response.json();

    if (response.status === 200) {
      if (json.pincode) {
        const pins = await fetch(
          `https://api.postalpincode.in/pincode/${json.pincode.trim()}`
        );
        const pinsJson = await pins.json();
        if (pinsJson[0].Status == "Success") {
          json = {
            ...json,
            city: pinsJson[0].PostOffice[0].District,
            state: pinsJson[0].PostOffice[0].State,
          };
        }
      }
      setIsLoggedIn(true);
      setAdmin(json);
    } else {
      setIsLoggedIn(false);
    }
  };

  const logout = async () => {
    const response = await fetch(`${process.env.HOST}admin/logout`, {
      method: "GET",
    });
    const json = await response.json();

    if (response.status === 200) {
      setIsLoggedIn(false);
      setAdmin({});
      router.push("/admin/login");
    }
  };

  return (
    <AdminContext.Provider
      value={{ admin, isLoggedIn, setIsLoggedIn, fetchAdmin, logout }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminState;
