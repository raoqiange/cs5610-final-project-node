import * as reviewsDao from './reviews-dao.js';

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
const createReview = async (req, res) => {
    const {animeId} = req.params;
    const newReview = req.body; //include username in the body, missing username causes force login
    newReview.anime_id = animeId;
    const insertedReview = await reviewsDao.createReview(newReview);
    res.json(insertedReview);
}

//url = '/api/anime/:animeId/reviews/:reviewId'
const updateReview = async (req, res) => {
    const {reviewId} = req.params;
    const updatedReview = req.body; //include username in the body
    const status = await reviewsDao.updateReview(reviewId, updatedReview);
    res.json(status);
}

//url = '/api/anime/:animeId/reviews/:reviewId'
const deleteReview = async (req, res) => {
    const {reviewId} = req.params;
    const status = await reviewsDao.deleteReview(reviewId);
    res.json(status)
}

export default (app) => {
    app.get('/api/anime/:animeId/reviews', findReviewsByAnimeId);
    app.get('/api/reviews', findReviewsByUsername);
    app.post('/api/anime/:animeId/reviews', createReview);
    app.put('/api/reviews/:reviewId', updateReview);
    app.delete('/api/reviews/:reviewId', deleteReview);
}