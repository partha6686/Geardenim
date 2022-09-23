import Product from "../../models/Product";
import connectDb from "../../middleware/db";

const handler = async (req, res) => {
  try {
    let products = await Product.find({
      createdAt: {
        $gte: new Date(new Date() - 60 * 60 * 24 * 3 * 1000),
      },
    }).sort({ _id: -1 });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default connectDb(handler);
