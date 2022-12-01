import mongoose from "mongoose";
import forumPostSchema from "./forum-posts-schema.js";
const forumPostModel = mongoose.model('ForumPostModel', forumPostSchema);
export default forumPostModel;