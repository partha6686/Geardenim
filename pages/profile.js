import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

const Profile = () => {
  const router = useRouter();

  useEffect(() => {
    if (getCookie("isLoggedIn") !== true) {
      router.push("/signin");
    }
  }, []);

  return <div>Profile</div>;
};

export default Profile;
