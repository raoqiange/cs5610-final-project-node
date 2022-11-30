import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
    username: String,
    password: String,
    role: {type: String, enum:['FAN', 'ADMIN', 'FORUM_AUTHOR']},
    email: String,
    favorite_genre: String,
    forum_limitations: Number,
}, {collection: 'users'});

export default schema;