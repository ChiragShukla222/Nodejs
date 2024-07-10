const express = require("express");
const app = express()

const PORT =8000;
// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routess
const stuRoute=require("../NodeJS/routes/studentRoutes")
app.use(stuRoute);
// ejs
app.set("view engine","ejs")
app.set("views",'./views')

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/csapp").then(()=>{
            console.log("database found")
}).catch((err)=>{
    console.log("error!!"+err)
})

app.listen(PORT,()=>{
    console.log(`Port ${PORT}!!!`)
})
