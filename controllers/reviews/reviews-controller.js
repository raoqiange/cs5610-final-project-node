import * as reviewsDao from './reviews-dao.js';
import * as recentInteractedAnimeDao from '../anime/recentInteractedAnime/recent-interacted-anime-dao.js';

//url = '/api/anime/:animeId/reviews'
const findReviewsByAnimeId = async (req, res) => {
    const {animeId} = req.params;
    const reviews = await reviewsDao.findReviewsByAnimeId(animeId);
    res.json(reviews);
}

const findReviewsByUsername = async (req, res) => {
    const {username} = req.query;
    const reviews = await reviewsDao.findReviewsByUsername(username);
    res.json(reviews);
}

//url = '/api/anime/:animeId/reviews'
//create review also create db entry in recent-interacted-anime
const createReview = async (req, res) => {
    const {animeId} = req.params;
    const newReview = req.body.review; //include username in the body, missing username causes force login
    newReview.anime_id = animeId;
    const insertedReview = await reviewsDao.createReview(newReview);
    //username pass through query or pass through body????? this is body
    const animeInDb = await recentInteractedAnimeDao.findRecentlyInteractedAnimeByFanNameAndAnimeId(newReview?.username, animeId);
    if (!animeInDb) { // if not found
        const newInteractedAnime = req.body.anime;
        newInteractedAnime.reviewed = true; //set review to true
        newInteractedAnime.collected = false; //default value
        newInteractedAnime.anime_id = animeId;
        newInteractedAnime.last_updated_time = Date();
        await recentInteractedAnimeDao.createRecentlyInteractedAnime(newInteractedAnime);
    } else {
        await recentInteractedAnimeDao.updateRecentlyReviewedAnime(animeInDb);
    }
    res.json(insertedReview);
}

// //url = '/api/reviews/:reviewId'
// const updateReview = async (req, res) => {
//     const {reviewId} = req.params;
//     const updatedReview = req.body; //include username in the body
//     const status = await reviewsDao.updateReview(reviewId, updatedReview);
//     res.json(status);
// }

//url = '/api/reviews/:reviewId'
const deleteReview = async (req, res) => {
    const {reviewId} = req.params;
    const {username} = req.query;
    const review = await reviewsDao.findReviewByReviewId(reviewId);
    const status = await reviewsDao.deleteReview(reviewId);
    const reviewHistory = await reviewsDao.findReviewsByUsernameAndAnimeId(username, review?.anime_id);
    // console.log(reviewHistory)
    // console.log(reviewHistory && reviewHistory.length === 0);
    if (reviewHistory && reviewHistory.length === 0) { //if user has other reviews for this anime, do not update review boolean
        const animeInDb = await recentInteractedAnimeDao.findRecentlyInteractedAnimeByFanNameAndAnimeId(username, review?.anime_id);
        await recentInteractedAnimeDao.removeRecentlyReviewedAnime(animeInDb);
    }
    res.json(status)
}

export default (app) => {
    app.get('/api/anime/:animeId/reviews', findReviewsByAnimeId);
    app.get('/api/reviews', findReviewsByUsername);
    app.post('/api/anime/:animeId/reviews', createReview);
    // app.put('/api/reviews/:reviewId', updateReview);
    app.delete('/api/reviews/:reviewId', deleteReview);
}