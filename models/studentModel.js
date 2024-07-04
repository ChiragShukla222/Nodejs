// model is to setup the database with the mongoose
    const mongoose = require("mongoose");
    const studentSchema = new mongoose.Schema({
        rollno:Number,
        name:String,
        phoneno:Number

    })
    module.exports=mongoose.model("mystudent",studentSchema)