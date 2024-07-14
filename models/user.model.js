import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    require: true,
    enum: ["male", "female"],
  },
  profilePic: {
    type: String,
    require: true,
    default: "",
  },
});

const User = mongoose.model("User", userSchema);

export default User;
