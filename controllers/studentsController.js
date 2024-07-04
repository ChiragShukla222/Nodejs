const homepage=(req,res)=>{
     
    res.render("home")
}
const aboutme =(req,res)=>{
    res.render("about")
}
const ser=(req,res)=>{
    res.render("service")
}
module.exports={
    homepage,
    aboutme,
    ser,
}