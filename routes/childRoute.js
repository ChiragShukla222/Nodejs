const express = require("express")
const route = express.Router();

const childController = require("../controller/childController")

route.get("/childname",childController.childName)

route.get("/childroll",childController.childRoll)

route.get("/childkey",childController.childKey)

module.exports=route;