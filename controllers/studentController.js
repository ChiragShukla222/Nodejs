const stuDisplay =(req,res)=>{
    res.send("studenst display");
}

const stuFess=(req,res)=>{
    res.send("student fess");
}
const stuResult=(req,res)=>{
    res.send("student result")
}
const stuClass=(req,res)=>{
    res.send("student class")
}
module.exports={
    stuDisplay,
    stuFess,
    stuResult,
    stuClass
}