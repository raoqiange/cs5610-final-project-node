import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
    title: String,
    description: String,
    author_username: String
}, {collection: 'posts'});

export default schema;