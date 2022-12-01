import forumCommentsModel from "./forum-comments-model.js";

export const createForumComment = (comment) => forumCommentsModel.create(comment);
export const updateForumComment= (commentId, updates) => forumCommentsModel.updateOne({_id: commentId}, {$set: updates});
export const getForumCommentsByCommentId = (commentId) => forumCommentsModel.findOne({_id: commentId});
export const deleteForumComment = (commentId) => forumCommentsModel.deleteOne({_id: commentId});
export const getForumComments = () => forumCommentsModel.find();
export const getForumCommentsByPostId = (postId) => forumCommentsModel.find({post_id: postId})
export const deleteForumCommentsByPostId = (postId) => forumCommentsModel.deleteMany({post_id: postId})