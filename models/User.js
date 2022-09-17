const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: ["M", "F", "N/A", ""], default: "" },
    password: { type: String, required: true },
    address: { type: String, default: "" },
    phone: { type: String, default: "" },
    pincode: { type: String, default: "" },
    dob: { type: String, default: "" },
  },
  { timestamps: true }
);

// mongoose.models = {};
// export default mongoose.model("User", UserSchema);
export default mongoose.models.User || mongoose.model("User", UserSchema);
