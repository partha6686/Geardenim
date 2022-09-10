import { createContext } from "react";
import React, { useState } from "react";
import { useRouter } from "next/router";

export const UserContext = createContext();

const CartState = (props) => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchUser = async () => {
    const response = await fetch(`${process.env.HOST}getuser`, {
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
      setUser(json);
    } else {
      setIsLoggedIn(false);
    }
  };

  const logout = async () => {
    const response = await fetch(`${process.env.HOST}logout`, {
      method: "GET",
    });
    const json = await response.json();

    if (response.status === 200) {
      setIsLoggedIn(false);
      setUser({});
      router.push("/");
    }
  };

  return (
    <UserContext.Provider
      value={{ user, isLoggedIn, setIsLoggedIn, fetchUser, logout }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default CartState;
