const express = require("express");
const app = express();
const PORT = 8000;

    const stu = require("./controller/stucontroller");

    app.get("/",stu.homeData);

    app.get("/about",stu.about);

app.listen(PORT,()=>{
    console.log("server is runing on 8000")
})