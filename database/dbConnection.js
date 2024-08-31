import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Hospital-Management",
      useNewUrlParser: true, // Use the new URL parser
      useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
    })
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
};
