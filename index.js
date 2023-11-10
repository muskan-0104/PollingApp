const express=require('express');
//for mongoose
const db=require('./config/mongoose');
const app=express();
const port=8000;

//for reading url encoded values
app.use(express.urlencoded());
//use routes
app.use('/',require('./routes'));//by deafault it fetches index.js itself so no need to mention 


app.listen(port,function(err){
    if(err){
    console.log(`Error starting server:${err}`);
    }
console.log(`Server started on port: ${port}`);
});