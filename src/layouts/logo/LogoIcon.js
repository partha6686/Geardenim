import React from "react";
import Link from "next/link";
import Image from "next/image";

const LogoIcon = () => {
  return (
    <Link href="/admin" className="cursor-pointer">
      <Image src="/logo.jpg" alt="geardenim-logo" width={160} height={45} />
    </Link>
  );
};

export default LogoIcon;
