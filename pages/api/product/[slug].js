import Product from "../../../models/Product";
import connectDb from "../../../middleware/db";

const handler = async (req, res) => {
  const { slug } = req.query;
  try {
    let product = await Product.findOne({ slug });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default connectDb(handler);
