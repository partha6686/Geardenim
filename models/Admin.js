const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ["CEO", "HR", "DBA", "EMP"], default: "EMP" },
    gender: { type: String, enum: ["M", "F", "N/A", ""], default: "" },
    password: { type: String, required: true },
    address: { type: String, default: "" },
    phone: { type: String, default: "" },
    pincode: { type: String, default: "" },
    dob: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
