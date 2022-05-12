import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  favorites: {
    type: [String],
    required: true
  },
  phone: {
    type: Number,
  },
  admin:{
    type: Boolean,
    default: undefined
  },
})

const UserModel = mongoose.model('user', UserSchema);
export default UserModel;