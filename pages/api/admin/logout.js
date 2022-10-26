import connectDb from "../../../middleware/db";
import cookie from "cookie";

const handler = async (req, res) => {
  try {
    res.setHeader("Set-Cookie", [
      cookie.serialize("adminToken", null, {
        httpOnly: true,
        secure: process.env.NODE_ENV != "developement",
        expires: new Date(0),
        sameSite: true,
        path: "/",
      }),
      cookie.serialize("isAdminLoggedIn", false, {
        secure: process.env.NODE_ENV != "developement",
        maxAge: 60 * 60 * 24 * 2,
        sameSite: true,
        path: "/",
      }),
    ]);
    res.status(200).json({ msg: "Logout Successful" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error Occured" });
    console.log(error);
  }
};

export default connectDb(handler);
