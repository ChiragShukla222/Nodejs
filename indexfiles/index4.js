const express = require("express");
const app = express();
const PORT = 8000;

app.get("/",(req,res)=>{
        res.send("get data")
})

app.get("/about",(req,res)=>{
    res.send("about me")
})

app.get("/service",(req,res)=>{
    res.send(("services"))
})
app.listen(PORT,()=>{
    console.log("server is runing on 8000")
})