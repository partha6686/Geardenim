import User from "../../models/User";
import connectDb from "../../middleware/db";
import fetchUser from "../../middleware/fetchUser";
const https = require("https");

const handler = async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select("-password");
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default connectDb(fetchUser(handler));
