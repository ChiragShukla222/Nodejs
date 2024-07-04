const express= require("express");
const route =express.Router();
const techController= require("../controller/techController");

route.get("/techdisplay",techController.Techdisplay)




module.exports=route;