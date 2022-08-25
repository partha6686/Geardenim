import Order from "../../models/Order";
import connectDb from "../../middleware/db";
import fetchUser from "../../middleware/fetchUser";

const handler = async (req, res) => {
  try {
    let order = await Order.find({ userId: req.user.id }).sort({_id: -1});
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default connectDb(fetchUser(handler));
