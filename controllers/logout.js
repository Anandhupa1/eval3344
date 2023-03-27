const logoutRouter = require("express").Router();
const {client}=require("../configs/connection");
logoutRouter.post("/",async(req,res)=>{
    try{
        let incToken =  req.headers.token;
        
        const tokens =await client.get("tokens");
        if(tokens==undefined){tokens=[]}
        console.log(tokens)
        tokens = JSON.parse(tokens);
        console.log(tokens)
        tokens.push(incToken);
        tokens = JSON.stringify(tokens);
        client.set("tokens",tokens);

        res.send("success")







    }catch(err){console.log("err | post | logout",err)}
})


module.exports={logoutRouter}