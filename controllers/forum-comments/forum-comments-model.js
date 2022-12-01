import mongoose from "mongoose";
import forumCommentsSchema from "./forum-comments-schema.js";
const forumCommentsModel = mongoose.model('ForumCommentsModel', forumCommentsSchema);
export default forumCommentsModel;