import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
const Footer = () => {
  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography>
        © 2022 All rights reserved by{" "}
        <a href="https://geardenim.vercel.app/" target="_blank">
          Geardenim.com
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
