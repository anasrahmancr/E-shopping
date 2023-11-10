import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.DB_URI);
    console.log("Database Connected Successfully..");
  } catch (error) {
    console.log("Error: ", error.message);
    // process.exit(1);
  }
};

export default connectDB;
    