const express=require("express");
const route = express.Router();

const studentsController = require("../controllers/studentsController")

route.get("/",studentsController.homepage)

route.get("/about",studentsController.aboutme)

route.get("/service",studentsController.ser)
module.exports=route;