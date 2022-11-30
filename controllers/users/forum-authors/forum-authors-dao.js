import forumAuthorsModel from "./forum-authors-model.js";

export const findForumAuthorByForumAuthorId = (forumAuthorId) => forumAuthorsModel.findOne({_id: forumAuthorId});
export const findForumAuthors = () => forumAuthorsModel.find();

export const createForumAuthor = (forumAuthor) => forumAuthorsModel.create(forumAuthor);

export const deleteForumAuthorByForumAuthorId = (forumAuthorId) => forumAuthorsModel.deleteOne({_id: forumAuthorId});

export const updateForumAuthor= (forumAuthorId, forumAuthor) =>
    forumAuthorsModel.updateOne({_id: forumAuthorId}, {$set:forumAuthor})
