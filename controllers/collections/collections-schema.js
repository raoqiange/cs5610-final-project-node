import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
    fan_username: String,
    name: String
}, {collection: 'collections'});

export default schema;