const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: [{
        productId: { type: String, required: true },
        quantity: { type: Number, default: 1 },
        size: { type: String },
    }],
    name: { type: String, required: true },
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: "Pending" },
},{ timestamps: true });

mongoose.models = {};
export default mongoose.model("Order", OrderSchema);
