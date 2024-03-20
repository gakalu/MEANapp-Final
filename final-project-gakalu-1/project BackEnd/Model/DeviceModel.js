const mongoose = require('mongoose');
const DeviceSchema = mongoose.Schema({
    
    name:{type: String, required: true},
    brand:{type: String, required: true},
    price: {type: Number, required: true},
    installeddate:{type: Date, required: true}
})
const DeviceModel = mongoose.model('devices', DeviceSchema)
class deviceCollection {
    static async getAll() {
        const device = await DeviceModel.find();
        return device;
    }
    static async create({name,brand,price,installeddate}) {
        const device = new DeviceModel({name,brand,price,installeddate});
        await device.save();
        return device;
    }
    static async getById(id){
        const device = await DeviceModel.findOne({_id: id}); 
        return device;
    }
    static async update(id, obj){
        const device = await DeviceModel.updateOne({_id: id}, obj);
        return device;
    }
    static async delete(id){
        const device = await DeviceModel.deleteOne({_id: id});
        return device;
    }
}

module.exports = deviceCollection;