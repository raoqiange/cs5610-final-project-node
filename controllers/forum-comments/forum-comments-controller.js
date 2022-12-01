import * as forumCommentsDao from "./forum-comments-dao.js";

const createForumComment = async (req, res) => {
    const comment = req.body;
    const status = await forumCommentsDao.createForumComment(comment);
    res.json(status);
}

const getForumComments = async (req, res) => {
    const comments = await forumCommentsDao.getForumComments();
    res.json(comments);
}
const getForumCommentByCommentId = async (req, res) => {
    const {commentId} = req.params;
    const status = await forumCommentsDao.getForumCommentsByCommentId(commentId);
    res.json(status);
}
const deleteForumComment = async (req, res) => {
    const {commentId} = req.params;
    const status = await forumCommentsDao.deleteForumComment(commentId);
    res.json(status);
}

const updateForumComment = async (req, res) => {
    const {commentId} = req.params;
    const updates = req.body;
    const status = await forumCommentsDao.updateForumComment(commentId, updates);
    res.json(status);
}

const getForumCommentByPostId = async (req, res) => {
    const {postId} = req.params;
    const status = await forumCommentsDao.getForumCommentsByPostId(postId);
    res.json(status);
}

const deleteForumCommentsByPostId = async (req, res) => {
    const {postId} = req.params;
    const status = await forumCommentsDao.deleteForumCommentsByPostId(postId);
    res.json(status);
}


export default (app) => {
    app.get('/api/comments', getForumComments);
    app.get('/api/comments/:commentId', getForumCommentByCommentId);
    app.delete('/api/comments/:commentId', deleteForumComment);
    app.put('/api/comments/:commentId', updateForumComment);
    app.post('/api/comments', createForumComment);
    app.get('/api/comments/post/:postId', getForumCommentByPostId)
    app.delete('/api/comments/post/:postId', deleteForumCommentsByPostId)
}