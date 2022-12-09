import * as collectionsDao from './collections-dao.js';
import {removeAllCollectedAnimeByCollectionId} from "../collectedAnime/collected-anime-dao.js";

//url = '/api/collections/:collectionId' method:get
const findCollectionByCollectionId = async (req, res) => {
    const {collectionId} = req.params;
    console.log(collectionId);
    const collection = await collectionsDao.findCollectionByCollectionId(collectionId);
    console.log(collection)
    res.json(collection);
}

//url = '/api/collections?username=tom' method:get
const findCollectionsByFanUsername = async (req, res) => {
    const {username} = req.query;
    const collections = await collectionsDao.findCollectionsByFanUsername(username);
    res.json(collections);
}

// url = '/api/collections' method:post
const createCollection = async (req, res) => {
    //collection's fan_username, name, type, note are in req.body, needed to be transferred from the front-end
    const newCollection = req.body;
    const insertedCollection = await collectionsDao.createCollection(newCollection);
    res.json(insertedCollection);
}

// url = '/api/collections/:collectionId' method:put
const updateCollection = async(req, res) => {
    const collectionIdToUpdate = req.params.collectionId;
    const updates = req.body;
    const status = await collectionsDao.updateCollection(collectionIdToUpdate, updates);
    res.json(status);
}

// url = '/api/collections/:collectionId' method:delete
const deleteCollection = async (req, res) => {
    console.log(req.params.collectionId);
    const collectionIdToDelete = req.params.collectionId;
    await removeAllCollectedAnimeByCollectionId(collectionIdToDelete);
    const status = await collectionsDao.deleteCollection(collectionIdToDelete);
    res.json(status);
}

export default (app) => {
    app.get('/api/collections/:collectionId', findCollectionByCollectionId);
    app.get('/api/collections', findCollectionsByFanUsername)
    app.post('/api/collections', createCollection);
    app.put('/api/collections/:collectionId', updateCollection);
    app.delete('/api/collections/:collectionId', deleteCollection);
}
