import User from "../../models/User";
import connectDb from "../../middleware/db";
import fetchUser from "../../middleware/fetchUser";
import { omit } from "lodash";

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      let data = omit(req.body, ["password", "email"]);
      let item = await User.findByIdAndUpdate(req.user.id, data);
      res.status(200).json({ msg: "Success! Your account has been updated." });
    } else {
      res.status(400).json({ error: "Bad Request" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error Occured" });
    console.log(error);
  }
};

export default connectDb(fetchUser(handler));
