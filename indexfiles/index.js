const express = require("express")

const app = express();

app.get("/",(req,res)=>{
        res.send("welcome to my first prgoram")
})
app.get("/about",(req,res)=>{
    res.send("welcome to my about")
})
app.get("/services",(req,res)=>{
    res.send("services avaia")
})
app.listen(8000,()=>{
    console.log("server runiing on 8000")
});