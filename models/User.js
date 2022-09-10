const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: ["M", "F", "N/A"] },
    password: { type: String, required: true },
    address: { type: String },
    phone: { type: String },
    pincode: { type: String },
    dob: { type: String },
  },
  { timestamps: true }
);

// mongoose.models = {};
// export default mongoose.model("User", UserSchema);
export default mongoose.models.User || mongoose.model("User", UserSchema);
