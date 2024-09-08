import mongoose from "mongoose"

export const connectToMongo = async () => {
   if (mongoose.connection.readyState !== 1) {
      try {
         await mongoose.connect(process.env.CONNECTION_STRING)
         console.log("MongoDB connected");
      } catch (error) {
         console.log("MongoDB error!");
         console.log(error.message);
      }
   } else {  
      console.log("MongoDB already connected!");
   }
}