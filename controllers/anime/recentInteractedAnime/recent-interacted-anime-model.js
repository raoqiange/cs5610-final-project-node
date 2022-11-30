import mongoose from "mongoose";
import recentInteractedAnimeSchema from './recent-interacted-anime-schema.js';
const recentInteractedAnimeModel = mongoose.model('RecentInteractedAnimeModel', recentInteractedAnimeSchema);
export default recentInteractedAnimeModel;