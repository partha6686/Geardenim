import connectDb from "../../middleware/db";
import fetchUser from "../../middleware/fetchUser";
var crypto = require("crypto");

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      let signature = req.body.order_id + "|" + req.body.razorpay_payment_id;
      let expectedSignature = crypto
        .createHmac("sha256", process.env.NEXT_PUBLIC_RZP_SECRET)
        .update(signature.toString())
        .digest("hex");
      let response = { signatureIsValid: "false" };
      if (expectedSignature == req.body.razorpay_signature) {
        //payment is successful
        response = { signatureIsValid: "true" };
        res.status(200).json(response);
      } else {
        res.status(401).json(response);
      }
    } else {
      res.status(400).json({ error: "Bad Request" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error Occured" });
    console.log(error);
  }
};

export default connectDb(fetchUser(handler));
