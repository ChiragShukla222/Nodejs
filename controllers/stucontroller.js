const homeData=(req,res)=>{
    res.send("<h1>heloo</h1>");
}
const about=(req,res)=>{
    res.send("<h1>about me</h2>")
}
module.exports ={
    homeData,
    about,
}