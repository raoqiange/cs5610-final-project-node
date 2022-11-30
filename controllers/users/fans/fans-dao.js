import fansModel from "./fans-model.js";

export const findFanByFanId = (fanId) => fansModel.findOne({_id: fanId});
export const findFans = () => fansModel.find();

export const createFan = (fan) => fansModel.create(fan);

export const deleteFanByFanId = (fanId) => fansModel.deleteOne({_id: fanId});

export const updateFan= (fanId, fan) =>
    fansModel.updateOne({_id: fanId}, {$set:fan})
