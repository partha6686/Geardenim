import Admin from "../../../models/Admin";
import connectDb from "../../../middleware/db";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import cookie from "cookie";

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      const { email, password } = req.body;
      let admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(400).json({ error: "Invalid Credentials" });
      }
      bcrypt.compare(password, admin.password).then((result) => {
        if (!result) {
          return res.status(400).json({ error: "Invalid Credentials" });
        }
        const data = {
          admin: {
            id: admin.id,
            name: admin.name,
            role: admin.role,
          },
        };
        const authToken = jwt.sign(data, process.env.JWT_SECRET);
        res.setHeader("Set-Cookie", [
          cookie.serialize("adminToken", authToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV != "developement",
            maxAge: 60 * 60 * 24 * 2,
            sameSite: true,
            path: "/",
          }),
          cookie.serialize("isAdminLoggedIn", true, {
            secure: process.env.NODE_ENV != "developement",
            maxAge: 60 * 60 * 24 * 2,
            sameSite: true,
            path: "/",
          }),
        ]);
        res.status(200).json({ msg: "Login Successful" });
      });
    } else {
      res.status(400).json({ error: "Bad Request" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error Occured" });
    console.log(error);
  }
};

export default connectDb(handler);
