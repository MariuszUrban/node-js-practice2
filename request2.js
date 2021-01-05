const https = require("https"); 
const fs = require("fs")

const request = https.get('https://manropefont.com/', res => {
 
    let download = fs.createWriteStream("./stronka.html"); 
    res.pipe(download);

    res.on("end", ()=> {
        console.log("you got the file")
    })
});

request.end();