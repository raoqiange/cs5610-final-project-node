import reviewsModel from "./reviews-model.js";

export const findReviewByReviewId = (reviewId) => reviewsModel.findById(reviewId);

export const findReviewsByAnimeId = (animeId) => reviewsModel.find({anime_id: animeId});

export const findReviewsByUsername = (username) => reviewsModel.find({username});

export const findReviewsByUsernameAndAnimeId = (username, animeId) => reviewsModel.find({username, anime_id: animeId});

export const createReview = (review) => reviewsModel.create(review);

export const deleteReview = (reviewId) => reviewsModel.deleteOne({_id: reviewId});

export const updateReview = (reviewId, review) =>
    reviewsModel.updateOne({_id: reviewId}, {$set:review})
