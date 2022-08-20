import connectDb from "../../middleware/db";
import fetchUser from "../../middleware/fetchUser";
const Razorpay = require("razorpay");

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      var instance = new Razorpay({
        key_id: process.env.NEXT_PUBLIC_RZP_KEY,
        key_secret: process.env.NEXT_PUBLIC_RZP_SECRET,
      });

      var options = {
        amount: req.body.subTotal, // amount in the smallest currency unit
        currency: "INR",
        receipt: req.body.rid,
      };
      instance.orders.create(options, function (err, order) {
        if (!err) {
          res.status(200).json(order);
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