import * as AdminsDao from './admins-dao.js';

//url = '/api/admins/:adminId' method:get
const findAdminByAdminId = async (req, res) => {
    const {adminId} = req.params;
    const admin = await AdminsDao.findAdminByAdminId(adminId);
    res.json(admin);
}

//url = '/api/admins' method:get
const findAdmins = async (req, res) => {
    const admins = await AdminsDao.findAdmins();
    res.json(admins);
}

// url = '/api/admins' method:post
const createAdmin = async (req, res) => {
    //newAdmin's username, password, and email
    // needed to be transferred from the front-end
    const newAdmin= req.body;
    const insertedAdmin= await AdminsDao.createAdmin(newAdmin);
    res.json(insertedAdmin);
}

// url = '/api/admins/:adminId' method:put
const updateAdmin = async(req, res) => {
    const adminIdToUpdate = req.params.adminId;
    const updates = req.body;
    const status = await AdminsDao.updateAdmin(adminIdToUpdate, updates);
    res.json(status);
}

// url = '/api/admins/:adminId' method:delete
const deleteAdminByAdminId = async (req, res) => {
    const adminIdToDelete= req.params.adminId;
    const status = await AdminsDao.deleteAdminByAdminId(adminIdToDelete);
    res.json(status);
}

export default (app) => {
    app.get('/api/admins/:adminId', findAdminByAdminId);
    app.get('/api/admins', findAdmins)
    app.post('/api/admins', createAdmin);
    app.put('/api/admins/:adminId', updateAdmin);
    app.delete('/api/admins/:adminId', deleteAdminByAdminId);
}
