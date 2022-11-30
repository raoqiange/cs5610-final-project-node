import * as recentInteractedAnimeDao from "./recent-interacted-anime-dao.js";

const findRecentlyReviewedAnimeByUsername = async (req, res) => {
    const {username} = req.query;
    const anime = await recentInteractedAnimeDao.findRecentlyReviewedAnimeByUsername(username);
    res.json(anime);
}

export default (app) => {
    app.get('/api/recentlyReviewedAnime', findRecentlyReviewedAnimeByUsername);
}