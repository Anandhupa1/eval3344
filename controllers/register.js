const { userModel } = require("../Models/user.model");

const regRouter = require("express").Router();



regRouter.get("/",async(req,res)=>{
    res.send("register here")
})
regRouter.post("/",async(req,res)=>{
    let {email, name , password}=req.body;
    if(!email || !name || !password){res.status(402).json("fill all the details ")}
    //res.send(req.body)
    let newUser =new userModel(req.body);
    let data = await newUser.save();
    res.send(data);
})






module.exports={regRouter};