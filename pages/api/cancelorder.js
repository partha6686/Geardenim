import connectDb from "../../middleware/db";
import fetchUser from "../../middleware/fetchUser";
import Order from "../../models/Order";

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      Order.findOneAndDelete({ orderId: req.body.order_id }, (err) => {
        if (!err) {
          res.status(200).json({ msg: "Payment Cancelled" });
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
