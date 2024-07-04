const express = require("express")

const app = express();

const PORT=8000;

app.get("/mydata",(req,res)=>{
    res.status(200).json("hi i am from Cybrom");
})
app.post("/datasave",(req,res)=>{
    res.status(200).json("data posting by user")
})
app.listen(PORT,()=>{
    console.log(`server run on port: ${PORT}`)
})

