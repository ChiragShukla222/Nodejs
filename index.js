// to import express
const express = require("express");
const app = express();
 //to set the ejs engine
 app.set("view engine","ejs")
//  to make route connnection

const stuRoute =require("../NodeJS/routes/stuRoute");
//to use the stuRoute
app.use(stuRoute);
const PORT=8000;
//to make dadtabase
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/app1").then(()=>{
            console.log("databasefound")
}).catch((err)=>{
    console.log("erroe found"+err)
})

app.listen(PORT,()=>{
    console.log(`port run on ${PORT} !!!`)
})