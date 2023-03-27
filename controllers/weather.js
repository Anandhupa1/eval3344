const { auth } = require("../configs/authenticate");

const weatherRouter = require("express").Router();


weatherRouter.get("/",auth,async(req,res)=>{
    res.send(req.body)
})



module.exports={weatherRouter};