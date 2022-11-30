import * as usersDao from './users-dao.js';
//url = '/api/users/:UserId' method:get
const findUserByUserId = async (req, res) => {
    const {UserId} = req.params;
    const User = await usersDao.findUserByUserId(UserId);
    res.json(User);
}

//url = '/api/users' method:get
const findUsers = async (req, res) => {
    const users = await usersDao.findUsers();
    res.json(users);
}

const findAdmins = async (req, res) => {
    const admins = await usersDao.findAdmins();
    res.json(admins);
}

const findFans = async (req, res) => {
    const fans = await usersDao.findFans();
    res.json(fans);
}

const findForumAuthors = async (req, res) => {
    const forumAuthors = await usersDao.findForumAuthors();
    res.json(forumAuthors);
}

// url = '/api/users' method:post
const createUser = async (req, res) => {
    const newUser= req.body;
    const insertedUser= await usersDao.createUser(newUser);
    res.json(insertedUser);
}

// url = '/api/users/:UserId' method:put
const updateUser = async(req, res) => {
    const UserIdToUpdate = req.params.UserId;
    const updates = req.body;
    const status = await usersDao.updateUser(UserIdToUpdate, updates);
    res.json(status);
}

// url = '/api/users/:UserId' method:delete
const deleteUserByUserId = async (req, res) => {
    const UserIdToDelete= req.params.UserId;
    const status = await usersDao.deleteUserByUserId(UserIdToDelete);
    res.json(status);
}

const login = async (req, res) => {
    const credential = req.body;
    const existingUser = await usersDao.findUserByCredentials(credential.username, credential.password);
    if(!existingUser) {
        res.sendStatus(403);
        return
    }
    req.session['currentUser'] = existingUser;
    res.json(existingUser);
}

const register = async (req, res) => {
    //user = {username, password,}
    const User = req.body;
    const existingUser = await usersDao.findUserByUsername(User.username);
    if (existingUser) {
        res.sendStatus(403)
        return
    }
    const actualUser = await usersDao.createUser(User);
    req.session['currentUser'] = actualUser;
    res.json(actualUser);
}

const profile = async (req, res) => {
    if(req.session['currentUser']) {
        res.json(req.session['currentUser']);
        return
    }
    res.sendStatus(403)
}

const logout = async (req, res)=> {
    req.session['currentUser'] = null;
    res.sendStatus(200);
}


export default (app) => {
    app.post('/api/users', createUser);
    app.get('/api/users/:UserId', findUserByUserId);
    app.get('/api/users', findUsers)
    app.put('/api/users/:UserId', updateUser);
    app.delete('/api/users/:UserId', deleteUserByUserId);

    app.get('/api/admins', findAdmins);
    app.get('/api/fans', findFans);
    app.get('/api/forum_authors', findForumAuthors);

    app.post('/api/register', register);
    app.post('/api/login', login);
    app.post('/api/profile', profile);
    app.post('/api/logout', logout);
}
