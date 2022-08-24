import Order from "../../../models/Order";
import connectDb from "../../../middleware/db";

const handler = async (req, res) => {
  const { id } = req.query;
  try {
    let order = await Order.findOne({ orderId: id });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default connectDb(handler);
