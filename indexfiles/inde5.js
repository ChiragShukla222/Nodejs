const express = require("express");
const app = express();
const PORT = 8000;

    const stuRoute = require("../routes/studentRoute")

    app.use("/students",stuRoute)

app.listen(PORT,()=>{
    console.log("server is runing on 8000")
})