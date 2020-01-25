const express= require("express");
const app= express();
const nunjucks= require("nunjucks")
const data= require("./data.js")
const bodyParser= require("body-parser")

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.static('./public'));
	

function root(req,res,next){

	console.log("BIENVENIDO")
	next()


}

app.get("/",root, (req,res)=>{
	res.render("index.html",{tweets: data.list().map((tweet, i) => ({...tweet, id: i})) })
})

app.post("/tweet",(req,res)=>{
	if (!req.body.name.trim() || !req.body.content.trim()) res.sendStatus(400);
	console.log(req.body)
	data.add(req.body.name,req.body.content)
	res.redirect("/")
})

app.get("/tweet/:id",(req,res)=>{
	
	if (req.query.next == "1") return res.redirect("/tweet/"+((Number(req.params.id))+1))
	var arregloIndice= [{ ...data.list()[req.params.id], id: req.params.id }]
	res.render("index.html",{tweets: arregloIndice})
	console.log(req.params.id)
})

app.post("/comment/:id",(req,res)=>{
	if (!req.body.name.trim() || !req.body.content.trim()) res.sendStatus(400);
	data.comment(req.params.id,req.body.name,req.body.content)
	res.redirect("/tweet/"+req.params.id)
})


app.get("*",(req,res)=>{

	res.sendStatus(404)

})



app.listen(8080,()=> console.log("Estoy en el puerto 8080"))