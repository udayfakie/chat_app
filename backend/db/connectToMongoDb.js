import mongoose from "mongoose";

const connctToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log(" erorr connected to MongoDB", erroe.message);
  }
};
export default connctToMongoDb
