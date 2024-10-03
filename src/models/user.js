import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: Object,
    required: true,
    default: {
      top: "",
      eyes: "",
      clothes: "",
      mouth: "",
      hair: "",
    },
  },
});

const USER = mongoose.models.users || mongoose.model("users", UserSchema);
export default USER;

