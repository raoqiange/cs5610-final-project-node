import mongoose from "mongoose";
import forumAuthorsSchema from "./forum-authors-schema.js";
const forumAuthorsModel = mongoose.model('ForumAuthorsModel', forumAuthorsSchema);
export default forumAuthorsModel;