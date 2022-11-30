import mongoose from "mongoose";
import collectedAnimeSchema from "./collected-anime-schema.js";
const collectedAnimeModel = mongoose.model('CollectedAnimeModel', collectedAnimeSchema);
export default collectedAnimeModel;