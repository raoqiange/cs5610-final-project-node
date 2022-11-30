import * as FansDao from './fans-dao.js';

//url = '/api/fans/:fanId' method:get
const findFanByFanId = async (req, res) => {
    const {fanId} = req.params;
    const fan = await FansDao.findFanByFanId(fanId);
    res.json(fan);
}

//url = '/api/fans' method:get
const findFans = async (req, res) => {
    const fans = await FansDao.findFans();
    res.json(fans);
}

// url = '/api/fans' method:post
const createFan = async (req, res) => {
    //fan's username, password, and favorite_genre
    // needed to be transferred from the front-end
    const newFan= req.body;
    const insertedFan= await FansDao.createFan(newFan);
    res.json(insertedFan);
}

// url = '/api/fans/:fanId' method:put
const updateFan = async(req, res) => {
    const fanIdToUpdate = req.params.fanId;
    const updates = req.body;
    const status = await FansDao.updateFan(fanIdToUpdate, updates);
    res.json(status);
}

// url = '/api/fans/:fanId' method:delete
const deleteFanByFanId = async (req, res) => {
    const fanIdToDelete= req.params.fanId;
    const status = await FansDao.deleteFanByFanId(fanIdToDelete);
    res.json(status);
}

export default (app) => {
    app.get('/api/fans/:fanId', findFanByFanId);
    app.get('/api/fans', findFans)
    app.post('/api/fans', createFan);
    app.put('/api/fans/:fanId', updateFan);
    app.delete('/api/fans/:fanId', deleteFanByFanId);
}
