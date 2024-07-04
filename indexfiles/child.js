const express=require("express");
const app = express();
const PORT= 8080;

    const croute = require("../routes/childRoute")
    app.use("/child",croute)

app.listen(PORT,()=>{
    console.log("server is running on 8080")
})