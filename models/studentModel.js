const mongoose = require("mogoose")

const studentSchema= new mongoose.Schema({
    rollno:Number,
    name:String,
    city:String,
    fess:number
})

module.exports= mongoose.model("student",studentSchema)

