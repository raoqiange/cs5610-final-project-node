import collectedAnimeModel from "./collected-anime-model.js";

export const findCollectedAnimeByCollectedAnimeId = (collectedAnimeId) => collectedAnimeModel.findById(collectedAnimeId);

export const findAnimeIdsByCollectionId = (collectionId) => collectedAnimeModel.find({collection_id: collectionId});

export const createCollectedAnime = (collectedAnime) => collectedAnimeModel.create(collectedAnime);

//remove one anime from collection
export const removeCollectedAnime = (collectedAnimeId) => collectedAnimeModel.deleteOne({_id: collectedAnimeId});

// export const removeAnimeFromCollection = (collectionId, animeId) =>
//     collectedAnimeModel.deleteMany({collection_id: collectionId, anime_id: animeId})

//remove all anime when a collection is deleted
export const removeAllCollectedAnimeByCollectionId = (collectionId) =>
    collectedAnimeModel.deleteMany({collection_id: collectionId})
