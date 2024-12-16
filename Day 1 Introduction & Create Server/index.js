const express = require('express');
const port = 1008;

const app = express();

app.set("view engine", "ejs");

const students = [
    {id: "1", name: "Rutul", age: "20"},
    {id: "2", name: "Khushal", age: "20"},
    {id: "3", name: "Vrushil", age: "19"},
    {id: "4", name: "Saurabh", age: "18"},
    {id: "5", name: "Ayush", age: "21"},
]

app.get("/",(req,res)=>{
    res.render("index", {students});
})

app.listen(port, (err)=>{
    err ? console.log(err) : console.log("Server");  
})