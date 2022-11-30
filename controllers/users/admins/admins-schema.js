import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
    username: String,
    password: String,
    email: String,
}, {collection: 'admins'});

export default schema;