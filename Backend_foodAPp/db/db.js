import mongoose from "mongoose";

export const db = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESTAURANT",
    })
    .then(() => {
      console.log("✅ Database connected successfully");
    })
    .catch((error) => {
      console.error("❌ Database connection failed:", error);
    });
};
