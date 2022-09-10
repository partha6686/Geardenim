import User from "../../models/User";
import connectDb from "../../middleware/db";
import fetchUser from "../../middleware/fetchUser";
const bcrypt = require("bcryptjs");

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      if (
        !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(
          req.body.password
        )
      ) {
        return res.status(400).json({
          error:
            "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
        });
      } else if (req.body.password !== req.body.cpassword) {
        return res.status(400).json({
          error: "Password and Confirm password does not match",
        });
      }
      let user = await User.findById(req.user.id);
      if (!user) {
        return res.status(400).json({ error: "Please Login to continue" });
      }
      bcrypt.compare(req.body.curpassword, user.password).then((result) => {
        if (!result) {
          return res
            .status(400)
            .json({ error: "Please enter correct password." });
        } else {
          bcrypt.hash(req.body.password, 10, async (err, hash) => {
            if (!err) {
              let item = await User.findByIdAndUpdate(req.user.id, {
                password: hash,
              });
              res
                .status(200)
                .json({ msg: "Success! Your password has been updated." });
            }
          });
        }
      });
    } else {
      res.status(400).json({ error: "Bad Request" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error Occured" });
    console.log(error);
  }
};

export default connectDb(fetchUser(handler));
