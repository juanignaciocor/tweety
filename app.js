const express= require("express");
const app= express();

const data= require("./data.js")



app.get("/", (req,res)=>{
	console.log(req.headers)
	res.send(data.tweets)


})
app.get("/login",(req,res)=>{




})

app.post("/login",(req,res)=>{





})

app.post("/tweet",(req,res)=>{





})






app.listen(8080,()=> console.log("Estoy en el puerto 8080"))