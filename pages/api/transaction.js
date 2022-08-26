import connectDb from "../../middleware/db";
import fetchUser from "../../middleware/fetchUser";
import Order from "../../models/Order";
var crypto = require("crypto");

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      // validatePaymentVerification({"order_id": razorpayOrderId, "payment_id": razorpayPaymentId }, signature, secret);
      let signature = req.body.order_id + "|" + req.body.razorpay_payment_id;
      let expectedSignature = crypto
        .createHmac("sha256", process.env.NEXT_PUBLIC_RZP_SECRET)
        .update(signature.toString())
        .digest("hex");
      if (expectedSignature == req.body.razorpay_signature) {
        //payment is successful
        let order = await Order.findOneAndUpdate(
          { orderId: req.body.order_id },
          { paymentId: req.body.razorpay_payment_id, status: "paid" }
        );
        res.status(200).json({ payment: "true" });
      } else {
        res.status(401).json({ payment: "false" });
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
