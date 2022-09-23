import Product from "../../../models/Product";
import connectDb from "../../../middleware/db";

const handler = async (req, res) => {
  const { brand } = req.query;
  try {
    let products = await Product.find({ brand }).sort({ _id: -1 });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default connectDb(handler);
