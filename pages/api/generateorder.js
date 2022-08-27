import connectDb from "../../middleware/db";
import fetchUser from "../../middleware/fetchUser";
const Razorpay = require("razorpay");
import Order from "../../models/Order";
import Product from "../../models/Product";

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      let product,
        sum = 0;
      for await (const item of req.body.cart) {
        product = await Product.findById(item.id);
        sum += item.price * item.qty;
        if (product.price !== item.price || product.mrp !== item.mrp) {
          res.status(400).json({
            error:
              "Price of the Products Changed. Please clear Cart and try again 1.",
          });
          return;
        }
      }
      
      if (sum * 100 == req.body.subTotal) {
        var instance = new Razorpay({
          key_id: process.env.NEXT_PUBLIC_RZP_KEY,
          key_secret: process.env.NEXT_PUBLIC_RZP_SECRET,
        });

        var options = {
          amount: req.body.subTotal, // amount in the smallest currency unit
          currency: "INR",
          receipt: req.body.rid,
        };

        req.body.cart.forEach((element) => {
          element.status = "processing";
        });

        instance.orders.create(options, async (err, order) => {
          if (!err) {
            let newOrder = new Order({
              orderId: order.id,
              userId: req.user.id,
              products: req.body.cart,
              name: req.body.custName,
              address: req.body.custAddress,
              phone: req.body.custPhone,
              amount: req.body.subTotal / 100,
            });
            await newOrder.save();
            res.status(200).json(order);
            return;
          }
        });
      } else {
        res.status(400).json({
          error:
            "Price of the Products Changed. Please clear Cart and try again.",
        });
        return;
      }
    } else {
      res.status(400).json({ error: "Bad Request" });
      return;
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error Occured" });
    console.log(error);
  }
};

export default connectDb(fetchUser(handler));
