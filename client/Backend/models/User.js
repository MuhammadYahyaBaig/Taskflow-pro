import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id; // _id ko response se hata dein
      delete ret.password; // Password ko response se hata dein 
    }
  }
});
const User = mongoose.model("User", userSchema);
export default User;