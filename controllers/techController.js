const Techdisplay=(req,res)=>{
        res.send("Teacher display")
}
const Techname=(req,res)=>{
    res.send("Teacher name")
}
const Techid=(req,res)=>{
    res.send("Teacher id")
}

module.exports={
    Techdisplay,
    Techname,
    Techid
}