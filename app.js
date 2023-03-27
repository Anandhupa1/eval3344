const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const {connection}=require("./configs/connection")
const { regRouter } = require("./controllers/register");
const { loginRouter } = require("./controllers/login");
const { weatherRouter } = require("./controllers/weather");
const { logoutRouter } = require("./controllers/logout");

//redis

const {client}=require("./configs/connection")

//rateLimiter
const rateLimit = require('express-rate-limit')
const limiter = rateLimit({
	windowMs: 3 * 60 * 1000, // 3 minutes
	max: 1, // Limit each IP to 1 request per `window` ( per 3 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
//app.use(limiter)

app.get("/",async(req,res)=>{
    client.set("name","anandhu")
    let n  = await client.get("name");
    console.log(n);
    res.send("home page")
})
//routers
app.use("/register",regRouter);
app.use("/login",loginRouter);
app.use("/weather",weatherRouter);
app.use("/logout",logoutRouter);







app.listen(process.env.port,async()=>{
    try{
    await connection;
    console.log("connected to mongodb")
    await client.connect();
    console.log("connected to redis")
    
    }catch(err){console.log("errror in connection",err)}
    console.log("app started at port 3000")
})