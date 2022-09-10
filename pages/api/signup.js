import User from "../../models/User";
import connectDb from "../../middleware/db";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          error:
            "A user with the given email alredy exists.Please login to continue.",
        });
      }
      if (
        !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(
          req.body.password
        )
      ) {
        return res.status(400).json({
          error:
            "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
        });
      } else {
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
          if (!err) {
            user = await User.create({
              name: req.body.name,
              email: req.body.email,
              password: hash,
            });
            if (user) {
              res.status(200).json({ msg: "Account Created Successfully" });
            } else {
              throw "Some Unexpected error Occured.";
            }
          }
        });
      }
    } else {
      res.status(400).json({ error: "Bad Request" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error Occured" });
    console.log(error);
  }
};

export default connectDb(handler);
