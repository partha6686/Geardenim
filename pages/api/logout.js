import User from "../../models/User";
import connectDb from "../../middleware/db";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import cookie from "cookie";

const handler = async (req, res) => {
  try {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("authToken", null, {
        httpOnly: true,
        secure: process.env.NODE_ENV != "developement",
        expires: new Date(0),
        sameSite: true,
        path: "/",
      })
    );
    res.status(200).json({ msg: "Logout Successful" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error Occured" });
    console.log(error);
  }
};

export default connectDb(handler);
