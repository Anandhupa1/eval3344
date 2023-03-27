const { userModel } = require("../Models/user.model");
const jwt = require('jsonwebtoken');
const loginRouter = require("express").Router();

loginRouter.post("/",async(req,res)=>{
   // res.send("login here")

    try{
        let email = req.body.email;
        let userData = await userModel.find({email})
        if(!userData){res.send("please register")}
        else{
            console.log(userData)
           let password = req.body.password;
           //console.log(userData[0].password,password)
           if(userData[0].password!=password){res.status(402).json("wrong password")}
           else{
            //create and send jwt token
            let uId = userData[0]._id;
            console.log("uId",userData[0]._id)
            const  token = jwt.sign({ userId: uId }, 'masai');
            res.send({msg:"success",token })






           }
        }
    }catch(err){console.log("err in post login",err)}
})





module.exports={loginRouter}