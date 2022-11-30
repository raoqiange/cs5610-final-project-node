import mongoose from "mongoose";
import fansSchema from "./fans-schema.js";
const fansModel = mongoose.model('FansModel', fansSchema);
export default fansModel;