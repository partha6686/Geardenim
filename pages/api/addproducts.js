import Product from "../../models/Product";
import connectDb from "../../middleware/db";

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      for (let i = 0; i < req.body.length; i++) {
        let item = new Product({
          slug: req.body[i].slug,
          title: req.body[i].title,
          brand: req.body[i].brand,
          desc: req.body[i].desc,
          img: req.body[i].img,
          category: req.body[i].category,
          mrp: req.body[i].mrp,
          price: req.body[i].price,
          availability: req.body[i].availability,
        });
        await item.save();
      }
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
