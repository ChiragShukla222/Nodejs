const stuAbout=async(req,res)=>{
    res.render("about");
}
const stucontact=async(req,res)=>{
    res.render("contact")
}
const stuHome=async(req,res)=>{
    res.render("home")
}
const stuService=async(req,res)=>{
    res.render("service")
}

module.exports ={
    stuHome,
    stuAbout,
    stuService,
    stucontact
}