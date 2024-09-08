import mongoose from "mongoose";

const houseSchema = new mongoose.Schema({
   name: { type: String, required: true },
   price: { type: Number, required: true },
   location: { type: String, required: true },
   img: { type: String, required: true },
   description: { type: String, required: true }
});
 
const houseModel = mongoose.models.house || mongoose.model('house', houseSchema);

export default houseModel