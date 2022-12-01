import forumPostModel from "./forum-posts-model.js";

export const createForumPost = (post) => forumPostModel.create(post);
export const updateForumPost = (postId, updates) => forumPostModel.updateOne({_id: postId}, {$set: updates});
export const deleteForumPost = (postId) => forumPostModel.deleteOne({_id: postId});

export const getForumPost = () => forumPostModel.find();
export const getForumPostByPostId = (postId) => forumPostModel.findOne({_id: postId});
export const getForumPostByUsername = (username) => forumPostModel.find({author_username: username})