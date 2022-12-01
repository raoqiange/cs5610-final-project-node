import * as forumPostsDao from "./forum-posts-dao.js";
import * as forumCommentsDao from "../forum-comments/forum-comments-dao.js";

const createForumPost = async (req, res) => {
    const post = req.body;
    const status = await forumPostsDao.createForumPost(post);
    res.json(status);
}

const getForumPost = async (req, res) => {
    const posts = await forumPostsDao.getForumPost();
    res.json(posts);
}
const deleteForumPost = async (req, res) => {
    const {postId} = req.params;
    // todo : delete all comments
    // forumCommentsDao.deleteByPostId(postId);
    await forumCommentsDao.deleteForumCommentsByPostId(postId);
    const status = await forumPostsDao.deleteForumPost(postId);
    res.json(status);
}

const updateForumPost = async (req, res) => {
    const {postId} = req.params;
    const updates = req.body;
    console.log(postId);
    console.log(updates)
    const status = await forumPostsDao.updateForumPost(postId, updates);
    res.json(status);
}

const getForumPostByUsername = async (req, res) => {
    const {username} = req.params;
    const status = await forumPostsDao.getForumPostByUsername(username);
    res.json(status);
}

const getForumPostByPostId = async (req, res) => {
    const {postId} = req.params;
    const status = await forumPostsDao.getForumPostByPostId(postId);
    res.json(status);

}


export default (app) => {
    app.get('/api/posts', getForumPost);
    app.delete('/api/posts/:postId', deleteForumPost);
    app.put('/api/posts/:postId', updateForumPost);
    app.post('/api/posts', createForumPost);
    app.get('/api/posts/author/:username', getForumPostByUsername)
    app.get('/api/posts/:postId', getForumPostByPostId)

}