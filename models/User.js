const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: [{
        owner: { type: String},
        value: {type: String},
        type: {type: String, default: 'home'},
        phone: {type: String},
        default: {type: Boolean}
    }],
},{ timestamps: true });

// mongoose.models = {};
// export default mongoose.model("User", UserSchema);
export default mongoose.models.User || mongoose.model("User", UserSchema)
