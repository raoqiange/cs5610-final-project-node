import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
    title: String,
    picture_url: String,
    description: String,
    username: String,
    anime_id: String,
    reviewed: Boolean,
    collected: Boolean,
    last_updated_time: String
}, {collection: 'recent-interacted-anime'});

export default schema;