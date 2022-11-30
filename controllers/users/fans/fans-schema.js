import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
    username: String,
    password: String,
    favorite_genre: String,
}, {collection: 'fans'});

export default schema;