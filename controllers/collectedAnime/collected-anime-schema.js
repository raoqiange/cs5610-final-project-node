import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
    collection_id: Schema.ObjectId,
    anime_id: String
}, {collection: 'collected-anime'});

export default schema;