import Product from "../../models/Product";
import connectDb from "../../middleware/db";

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      for (let i = 0; i < req.body.length; i++) {
        let item = await Product.findByIdAndUpdate(
          req.body[i]._id,
          req.body[i]
        );
      }
      res.status(200).json({ msg: "Successfully Updated products" });
    } else {
      res.status(400).json({ error: "Bad Request" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error Occured" });
    console.log(error);
  }
};

export default connectDb(handler);
