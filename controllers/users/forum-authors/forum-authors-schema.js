import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
    username: String,
    password: String,
    forum_limitations: Number,
}, {collection: 'forum-authors'});

export default schema;