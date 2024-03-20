const deviceController = require('../Model/DeviceModel')
exports.getAll = async (req, res) => {
    const device = await deviceController.getAll();
    res.send(device);
}

exports.create = async (req, res) => {
    const{name,brand,price,installeddate}=req.body;
    const device = await deviceController.create({name,brand,price,installeddate});
    res.send(device);
}
exports.updateDeviceById = async (req, res) => {
    const device = await deviceController.update(req.params.id, req.body);
    res.send(device)
}

exports.deleteDeviceById = async (req, res) => {
    const device = await deviceController.delete(req.params.id);
    res.send(device)
}

exports.getDeviceById = async (req, res) => {
    const device = await deviceController.getById(req.params.id);
    res.send(device)
}