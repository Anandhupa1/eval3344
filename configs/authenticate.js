const jwt = require("jsonwebtoken")

const auth = async(req,res,next)=>{
console.log("hello from auth")  
let incToken = req.headers.token;

await jwt.verify(incToken, 'masai', function(err, decoded) {
if(err){res.send(401).json("not authorized")}
else{
console.log(decoded)
req.body.userId =decoded.userId;
console.log("userID",req.body.userId)
next();
}

 });

}

module.exports={auth}