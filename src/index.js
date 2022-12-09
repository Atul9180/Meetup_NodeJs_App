const express=require("express");
const {createConnection}=require('./db/index');
const { meetupRouter } = require("./routers/meetup");
const app=express();
const PORT= 3000;
const swig= require('swig');

//only for dev mode swig config. Not for Production..
swig.setDefaults({ cache:false });
app.use(express.urlencoded({extended:true}));        //middleware to read data from form
//tell app object about template engine use for html and to render it on response.render request
app.set('view engine','html');
// importing static css files
app.use(express.static("public"));
app.set("views",__dirname+"/views");     //tell where your html files(say views) are;
app.engine("html",swig.renderFile);

//calling connection function
createConnection()
    .then(()=>{console.log("Connection established..... ")})
    .catch(err=>{ console.log({message:"mongo Db connection errror", error:err.message})});

app.listen(PORT,()=>{console.log(`App is running on PORT ${PORT}`)})

//register your router with epress object 'app' to handle request whenever req comes on '/meetup'... 
app.use("/meetups",meetupRouter)


//to render the html view pages......
app.get("/",(req,res)=>{
    res.redirect("/meetups")             
})
