import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return;

    await mongoose.connect("mongodb://127.0.0.1:27017/cinehub");

    console.log("MongoDB Local Connected ✅");
  } catch (error) {
    console.log("DB Error ❌", error);
  }
};
