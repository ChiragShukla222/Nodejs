const express= require("express");
const app = express();
const PORT = 8000;

const techRoute=require("../routes/techRoute")
 
app.use("/teacher",techRoute)


app.listen(PORT,()=>{
    console.log("server is runing on 8000")
})