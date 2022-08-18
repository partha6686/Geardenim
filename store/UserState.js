import { createContext } from "react";
import React, { useState } from "react";
import { useRouter } from "next/router";

export const UserContext = createContext();

const CartState = (props) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchUser = async () => {
    const response = await fetch(`${process.env.HOST}getuser`, {
      method: "GET",
      headers: {
        Cookie: document.cookie,
      },
    });
    const json = await response.json();

    if (response.status === 200) {
      setIsLoggedIn(true);
      setUser(json);
    } else {
      setIsLoggedIn(false);
      console.log(json);
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
    }
    console.log(json);
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
