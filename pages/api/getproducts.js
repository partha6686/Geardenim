import Product from "../../models/Product";
import connectDb from "../../middleware/db";

const handler = async (req, res) => {
  try {
    let products = await Product.find().sort({ _id: -1 });
    let count = products.length;
    products = products.slice(
      parseInt(req.query.pg),
      parseInt(req.query.pg) + 10
    );
    res.status(200).json({ products, count });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default connectDb(handler);
