const express = require("express")

const route = express.Router();

const stuController = require("../controllers/studentController")

route.get("/",stuController.homePage)

route.get("/insert",stuController.insertPage)

route.get("/display",stuController.displayPage)

route.get("/contact",stuController.contactPage)

route.get("/update",stuController.updatePage)

route.post("/studentdata",stuController.studentData)

route.get("/recdelete",stuController.recDelete)



module.exports=route;