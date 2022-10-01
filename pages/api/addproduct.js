import Product from "../../models/Product";
import connectDb from "../../middleware/db";

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      let product = await Product.find({
        $or: [{ slug: req.body.slug }, { title: req.body.title }],
      });
      console.log(product);
      if (product[0]) {
        return res.status(400).json({
          error: "A product with the given slug or title alredy exists.",
        });
      }
      let item = new Product({
        slug: req.body.slug,
        title: req.body.title,
        brand: req.body.brand,
        desc: req.body.desc,
        img: req.body.img,
        category: req.body.category,
        mrp: req.body.mrp,
        price: req.body.price,
        availability: req.body.availability,
      });
      await item.save();
      res.status(200).json({ msg: "Successfully added products" });
    } else {
      res.status(400).json({ error: "Bad Request" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error Occured" });
    console.log(error);
  }
};

export default connectDb(handler);
