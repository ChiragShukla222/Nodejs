const express = require("express");
const app = express();
const PORT = 8000;
app.set("view engine",'ejs')
const stuRoute = require("../NodeJS/routes/studentsRoute");
const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/NodeJs').then

app.use(stuRoute);

app.listen(PORT,()=>{
    console.log("server is runing on 8000")
})