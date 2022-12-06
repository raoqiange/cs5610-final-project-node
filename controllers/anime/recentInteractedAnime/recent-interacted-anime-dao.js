import recentInteractedAnimeModel from "./recent-interacted-anime-model.js";

//used in this controller
export const findRecentlyReviewedAnimeByUsername = (username) =>
    recentInteractedAnimeModel.find({username, reviewed: true});

//used in collected-anime-controller to get all anime in one collection
export const findCollectedAnimeByAnimeIds = (animeIds) =>
    recentInteractedAnimeModel.find({anime_id: {$in: animeIds}, collected: true});

//used in create review and create collected-anime controller, if found call corresponding update,
//if not found, call create
export const findRecentlyInteractedAnimeByFanNameAndAnimeId = (username, animeId) =>
    recentInteractedAnimeModel.findOne({username, anime_id: animeId});

export const updateRecentlyReviewedAnime = (recentlyInteractedAnime) =>
    recentInteractedAnimeModel.updateOne(recentlyInteractedAnime, {$set: {last_updated_time: Date(), reviewed: true}});

export const updateRecentlyCollectedAnime = (recentlyInteractedAnime) =>
    recentInteractedAnimeModel.updateOne(recentlyInteractedAnime, {$set: {collected: true}});

//need frontend to pass in username, api to differ is reviewed or is collected and set the time
export const createRecentlyInteractedAnime = (recentlyInteractedAnime) =>
    recentInteractedAnimeModel.create(recentlyInteractedAnime);

//used in delete review or collected anime controller to set reviewed or collected to false
export const removeRecentlyReviewedAnime = (recentlyInteractedAnime) =>
    recentInteractedAnimeModel.updateOne(recentlyInteractedAnime, {$set: {reviewed: false}});

export const removeRecentlyCollectedAnime = (recentlyInteractedAnime) =>
    recentInteractedAnimeModel.updateOne(recentlyInteractedAnime, {$set: {collected: false}});

//used in collectedAnime controller to get anime by collectionId
export const getAnimeByAnimeIdsAndUsername = (animeIds, username) =>
    recentInteractedAnimeModel.find({anime_id: {$in: animeIds}, collected: true, username});
