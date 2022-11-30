import adminsModel from "./admins-model.js";

export const findAdminByAdminId = (adminId) => adminsModel.findOne({_id: adminId});
export const findAdmins = () => adminsModel.find();

export const createAdmin = (admin) => adminsModel.create(admin);

export const deleteAdminByAdminId = (adminId) => adminsModel.deleteOne({_id: adminId});

export const updateAdmin= (adminId, admin) =>
    adminsModel.updateOne({_id: adminId}, {$set:admin})
