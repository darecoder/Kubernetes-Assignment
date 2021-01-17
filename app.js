var express=require("express");
var app=express();

app.get('/',(req,res)=>{
    res.send("Your application is running!!");
})

app.listen(8080,process.env.IP,()=>{
    console.log("Listening on Port 8080");
})