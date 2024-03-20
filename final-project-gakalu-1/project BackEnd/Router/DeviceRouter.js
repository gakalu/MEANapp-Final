const express = require("express");
const deviceController = require("../Controller/DeviceController");
const userController = require("../Controller/user");
const router = express.Router();

router.use(userController.authorize);
router.get("", deviceController.getAll);
router.post("/create", deviceController.create);
router.get("/:id", deviceController.getDeviceById);
router.put("/:id", deviceController.updateDeviceById);
router.delete("/:id", deviceController.deleteDeviceById);

module.exports = router;
