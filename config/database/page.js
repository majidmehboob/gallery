import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB----------------:", process.env.MONGODBURL);
    return true;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return false;
  }
};

export default ConnectDB;
