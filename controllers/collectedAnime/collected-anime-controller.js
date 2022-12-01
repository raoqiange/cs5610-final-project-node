import * as collectedAnimeDao from './collected-anime-dao.js';
import * as recentInteractedAnimeDao from '../anime/recentInteractedAnime/recent-interacted-anime-dao.js';

// /api/collections/:collectionId/anime
const findAllAnimeByCollectionId = async (req, res) => {
    const {collectionId} = req.params;
    const collectedAnimeList = await collectedAnimeDao.findAnimeIdsByCollectionId(collectionId);
    const animeIds = collectedAnimeList.map(anime => anime.anime_id)
    const animeList = await recentInteractedAnimeDao.getAnimeByAnimeIds(animeIds);
    res.json(animeList);
}

// /api/collections/:collectionId/anime/:animeId
const createCollectedAnime = async (req, res) => {
    const {collectionId, animeId} = req.params;
    const newCollectedAnime = {
        collection_id: collectionId,
        anime_id: animeId
    }
    const {username} = req.query;
    await collectedAnimeDao.createCollectedAnime(newCollectedAnime); //insert collectedAnime db entry
    const animeInDb = await recentInteractedAnimeDao.findRecentlyInteractedAnimeByFanNameAndAnimeId(username, animeId);

    if (!animeInDb) { // if not found
        const newInteractedAnime = req.body.anime; //pass anime in the body
        newInteractedAnime.reviewed = false; //set review to true
        newInteractedAnime.collected = true; //default value
        newInteractedAnime.anime_id = animeId;
        newInteractedAnime.last_updated_time = Date();
        await recentInteractedAnimeDao.createRecentlyInteractedAnime(newInteractedAnime);
    } else {
        await recentInteractedAnimeDao.updateRecentlyCollectedAnime(animeInDb);
    }
    res.sendStatus(200) // return status indicating successful insertion
}

// /api/collectedAnime/:collectedAnimeId
const deleteCollectedAnime = async (req, res) => {
    const {collectedAnimeId} = req.params;
    const {username} = req.query;
    const collectedAnime = await collectedAnimeDao.findCollectedAnimeByCollectedAnimeId(collectedAnimeId);
    const animeInDb = await recentInteractedAnimeDao.findRecentlyInteractedAnimeByFanNameAndAnimeId(username, collectedAnime?.anime_id);
    await recentInteractedAnimeDao.removeRecentlyCollectedAnime(animeInDb);
    const status = await collectedAnimeDao.removeCollectedAnime(collectedAnimeId);
    res.json(status)
}

export default (app) => {
    app.get('/api/collections/:collectionId/anime', findAllAnimeByCollectionId);
    app.post('/api/collections/:collectionId/anime/:animeId', createCollectedAnime);
    app.delete('/api/collectedAnime/:collectedAnimeId', deleteCollectedAnime);
}
