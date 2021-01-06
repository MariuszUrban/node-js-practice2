const express =require("express");
const body = require("body-parser");
const fs = require("fs");
let skiTerms = require('./skiTerms.json');
const app = express(); 

const save = () => {
    fs.writeFile("./skiTerms.json", JSON.stringify(skiTerms, null, 2), error => {
        throw error;
    })
}
app.use(express.static("../client"));

app.get("/dictionary", (req, res)=>{
        res.json(skiTerms);
})

app.post('/dictionary', body.json(), (req,res)=>{
    skiTerms.push(req.body);
    save()
    res.json({
        status: "success",
        term: req.body, 
    })
})

app.listen( 3000, ()=>{
    console.log(`SKI DICTIONARY`)
})

