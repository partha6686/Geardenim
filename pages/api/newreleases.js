import Product from "../../models/Product";
import connectDb from "../../middleware/db";

const handler = async (req, res) => {
  try {
    let products = await Product.find().sort({ _id: -1 });
    products = products.slice(0, 16);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default connectDb(handler);
