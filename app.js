var express = require("express");
var http = require("http");
var morgan = require('morgan');
var cors = require('cors')
var dotenv = require('dotenv').config()
var app = express()
 
app.use(cors())

app.use(morgan('combined'))
/*
app.get('/',function(req,res){
    res.send('hi nodejs')
})    */

/http.get(`http://www.google.com/${process.env.SECRET}`,function(res){
    res.setEncoding('utf8')
    res.on('data',function(data){
        console.log(data)
    })
}) 

let method1 = function (){
    setTimeout(()=>{
        console.log("1");
    },5000)
};
let method2 = function (){
    setTimeout(()=>{
        console.log("2");
    },4000)
};
let method3 = function (){
    setTimeout(()=>{
        console.log("3");
    },2000)
};

method1();
method2();
method3();

app.listen(3000, function(){
    console.log("port listen ...")
})