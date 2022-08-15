import Product from "../../../models/Product";
import connectDb from "../../../middleware/db";

const handler = async (req, res) => {
  const { category } = req.query;
  try {
    let products = await Product.find({ category });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default connectDb(handler);
