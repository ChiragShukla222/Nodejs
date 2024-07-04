const express= require("express");
const route =express.Router();
const stuController = require("../controller/studentController")

route.get("/studisplay",stuController.stuDisplay)

route.get("/stufees",stuController.stuFess)

route.get("/sturesult",stuController.stuResult)

route.get("/stuclass",stuController.stuClass)

module.exports=route;