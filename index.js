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

app.listen(PORT,()=>{
    console.log(`port run on ${PORT} !!!`)
})