import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
    username: String,
    anime_id: Number,
    rating: Number,
    comment: String
}, {collection: 'reviews'});

export default schema;