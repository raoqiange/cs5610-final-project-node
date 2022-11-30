import collectedAnimeModel from "./collected-anime-model.js";

export const createCollectedAnime = (collectedAnime) => collectedAnimeModel.create(collectedAnime);

export const deleteCollectedAnime = (collectedAnimeId) => collectedAnimeModel.deleteOne({_id: collectedAnimeId});

// export const findAnimeByCollectionId = ()