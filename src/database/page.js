import mongoose from "mongoose";

const DBConnection = async () => {
  try {
    const connectionstring =
      "mongodb+srv://majidmehboob1005:lJzyaGoNBgDrO9DZ@cluster0.xu90f.mongodb.net/Gallery?retryWrites=true&w=majority&appName=Cluster0";
;
    await mongoose.connect(connectionstring);
  } catch (error) {
    throw error;
  }
};
export default DBConnection;
