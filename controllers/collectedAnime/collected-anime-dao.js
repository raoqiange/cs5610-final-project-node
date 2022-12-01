import collectedAnimeModel from "./collected-anime-model.js";

export const findCollectedAnimeByCollectedAnimeId = (collectedAnimeId) => collectedAnimeModel.findById(collectedAnimeId);

export const findAnimeIdsByCollectionId = (collectionId) => collectedAnimeModel.find({collection_id: collectionId});

export const createCollectedAnime = (collectedAnime) => collectedAnimeModel.create(collectedAnime);

export const removeCollectedAnime = (collectedAnimeId) => collectedAnimeModel.deleteOne({_id: collectedAnimeId});