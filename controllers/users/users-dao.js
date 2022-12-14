import usersModel from "./users-model.js";

export const createUser = (user) => usersModel.create(user);
export const findUsers = () => usersModel.find();
export const findAdmins = () => usersModel.find({role: 'ADMIN'});
export const findForumAuthors = () => usersModel.find({role: 'FORUM_AUTHOR'});
export const findFans = () => usersModel.find({role: 'FAN'});

export const findUserByUserId = (userId) => usersModel.findOne({_id: userId});
export const findPublicUserByUsername = (username) => usersModel.findOne({username: username}, {password:false})
export const findUserByUsername = (username) => usersModel.findOne({username});
export const findUserByCredentials = (username, password) => usersModel.findOne({username, password}, {password: false});

export const deleteUserByUserId = (userId) => usersModel.deleteOne({_id: userId});

export const updateUser= (userId, user) =>
    usersModel.updateOne({_id: userId}, {$set:user})