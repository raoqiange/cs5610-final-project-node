import * as forumAuthorsDao from './forum-authors-dao.js';

//url = '/api/forum_authors/:forumAuthorId' method:get
const findForumAuthorByForumAuthorId = async (req, res) => {
    const {forumAuthorId} = req.params;
    console.log(forumAuthorId);
    const forumAuthor = await forumAuthorsDao.findForumAuthorByForumAuthorId(forumAuthorId);
    console.log(forumAuthor)
    res.json(forumAuthor);
}

//url = '/api/forum_authors' method:get
const findForumAuthors = async (req, res) => {
    const forumAuthors = await forumAuthorsDao.findForumAuthors();
    res.json(forumAuthors);
}

// url = '/api/forum_authors' method:post
const createForumAuthor = async (req, res) => {
    //newForumAuthor's username, password, and forum_limitations
    // needed to be transferred from the front-end
    const newForumAuthor= req.body;
    const insertedForumAuthor= await forumAuthorsDao.createForumAuthor(newForumAuthor);
    res.json(insertedForumAuthor);
}

// url = '/api/forum_authors/:forumAuthorId' method:put
const updateForumAuthor = async(req, res) => {
    const forumAuthorIdToUpdate = req.params.forumAuthorId;
    const updates = req.body;
    const status = await forumAuthorsDao.updateForumAuthor(forumAuthorIdToUpdate, updates);
    res.json(status);
}

// url = '/api/forum_authors/:forum_authors' method:delete
const deleteForumAuthorByForumAuthorId = async (req, res) => {
    const forumAuthorIdToDelete= req.params.forumAuthorId;
    const status = await forumAuthorsDao.deleteForumAuthorByForumAuthorId(forumAuthorIdToDelete);
    res.json(status);
}

export default (app) => {
    app.get('/api/forum_authors/:forumAuthorId', findForumAuthorByForumAuthorId);
    app.get('/api/forum_authors', findForumAuthors)
    app.post('/api/forum_authors', createForumAuthor);
    app.put('/api/forum_authors/:forumAuthorId', updateForumAuthor);
    app.delete('/api/forum_authors/:forumAuthorId', deleteForumAuthorByForumAuthorId);
}
