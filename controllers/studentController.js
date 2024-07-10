const stuMod = require("../models/stuModel") 

const homePage = async(req,res)=>{
    res.render("home")

}

const insertPage =async(req,res)=>{
    res.render("insert")
}

// const displayPage = async(req,res)=>{
//     res.render("display")
// }

const contactPage = async(req,res)=>{

    res.render("contact")
}
 
const studentData = async(req, res) => {
    console.log("Form data received:", req.body); // Debugging
    // const student = new stuMod(req.body);
    // await student.save();
    
    //to store the student data
    console.log(req.body)
    let rno= req.body.rollno;
    let nm= req.body.name;
    let ct= req.body.city;
    let fs= req.body.fees;
    // console.log(rno);

    const student= new stuMod({
        rollno:rno,
        name:nm,
        city:ct,
        fees:fs
    })
        // to save student data
        student.save()



    res.render("insert");

    
}
const displayPage=async(req,res)=>{
    stuMod.find().then((myData)=>{
        res.render("display",{Data:myData})
    })
}
const updatePage = async(req,res)=>{
    const myData = await stuMod.find()

    res.render('update',{Data:myData})
}
// to delete the data from the dispaly page 
const recDelete =async(req,res)=>{
    const myid = req.query.id;
    const ans = await stuMod.findByIdAndDelete(myid);
    if(ans){
        const myData = await stuMod.find();
        res.render("update",{Data:myData})
    }
}
module.exports = {
    homePage,
    insertPage,
    contactPage,
    displayPage,
    studentData,
    updatePage,
    recDelete
};

