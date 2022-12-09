import collectedAnimeModel from "./collected-anime-model.js";

export const findCollectedAnimeByCollectionIdAndAnimeId = (collectionId, animeId) =>
    collectedAnimeModel.findOne({collection_id: collectionId, anime_id: animeId});

export const findAnimeIdsByCollectionId = (collectionId) => collectedAnimeModel.find({collection_id: collectionId});

export const createCollectedAnime = (collectedAnime) => collectedAnimeModel.create(collectedAnime);

//remove one anime from collection
export const removeCollectedAnime = (collectionId, animeId) =>
    collectedAnimeModel.deleteOne({collection_id: collectionId, anime_id: animeId});

//remove all anime when a collection is deleted
export const removeAllCollectedAnimeByCollectionId = (collectionId) =>
    collectedAnimeModel.deleteMany({collection_id: collectionId})
