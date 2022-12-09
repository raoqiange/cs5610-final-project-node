import collectionsModel from "./collections-model.js";

export const findCollectionByCollectionId = (connectionId) => collectionsModel.findOne({_id: connectionId});

export const findCollectionsByFanUsername= (fan_username) => collectionsModel.find({fan_username: fan_username});

export const createCollection = (collection) => collectionsModel.create(collection);

export const deleteCollection = (collectionId) => collectionsModel.deleteOne({_id: collectionId});

export const updateCollection= (collectionId, collection) =>
    collectionsModel.updateOne({_id: collectionId}, {$set:collection})
