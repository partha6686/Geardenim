import Admin from "../../../models/Admin";
import connectDb from "../../../middleware/db";
import fetchAdmin from "../../../middleware/fetchAdmin";
const https = require("https");

const handler = async (req, res) => {
  try {
    let admin = await Admin.findById(req.admin.id).select("-password");
    return res.status(200).json(admin);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default connectDb(fetchAdmin(handler));
