import connectDb from "../../middleware/db";
import fetchUser from "../../middleware/fetchUser";
import Order from "../../models/Order";
import Product from "../../models/Product";
var crypto = require("crypto");

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
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
        for await (const item of req.body.cart) {
          let product = await Product.findById(item.id);
          for await (const key of product.availability) {
            if (key["size"] == item.size) {
              key["qty"] -= item.qty;
            }
          }
          await Product.findByIdAndUpdate(product._id, product);
        }

        res.status(200).json({ payment: "true" });
      } else {
        res.status(400).json({ payment: "false" });
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
