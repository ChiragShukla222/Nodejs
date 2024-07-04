

const express= require("express")
const route= express.Router()

const stuController = require("../controllers/stucontroller") ;


route.get("/",stuController.stuHome);


route.get("/about",stuController.stuAbout)

route.get("/contact",stuController.stucontact)

route.get("/service",stuController.stuService)

module.exports=route