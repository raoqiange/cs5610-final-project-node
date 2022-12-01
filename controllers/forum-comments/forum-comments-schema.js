import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
    comment: String,
    post_id: String,
    fan_username: String
}, {collection: 'comments'});

export default schema;