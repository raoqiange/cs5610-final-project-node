import mongoose from "mongoose";
import collectionsSchema from "./collections-schema.js";
const collectionsModel = mongoose.model('CollectionsModel', collectionsSchema);
export default collectionsModel;