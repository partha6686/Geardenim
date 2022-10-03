import Order from "../../models/Order";
import connectDb from "../../middleware/db";

const handler = async (req, res) => {
  try {
    let orders = await Order.find().sort({ _id: -1 });
    let count = orders.length;
    orders = orders.slice(parseInt(req.query.pg), parseInt(req.query.pg) + 10);
    res.status(200).json({ orders, count });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default connectDb(handler);
