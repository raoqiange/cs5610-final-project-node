import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
    title: String,
    ranking: Number,
    image: String,
    thumb: String,
    synopsis: String,
    username: String,
    anime_id: String,
    reviewed: Boolean,
    collected: Boolean,
    last_updated_time: String
}, {collection: 'recent-interacted-anime'});

export default schema;