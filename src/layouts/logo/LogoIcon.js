import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import LogoDark from "../../../assets/images/logos/logo-dark.svg";

const LogoIcon = () => {
  return (
    <Link href="/admin">
      <Image src="/logo.jpg" alt="geardenim-logo" width={160} height={45} />
    </Link>
  );
};

export default LogoIcon;
