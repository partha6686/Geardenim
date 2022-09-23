const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    brand: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    mrp: { type: Number, required: true },
    price: { type: Number, required: true },
    availability: [{
        size: {type: String, required: true},
        qty: {type: Number, required: true}
    }],
    sales: {type: Number, default: 0}
},{ timestamps: true });

export default mongoose.models.Product || mongoose.model("Product", ProductSchema)
// mongoose.models = {};
// export default mongoose.model("Product", ProductSchema);
