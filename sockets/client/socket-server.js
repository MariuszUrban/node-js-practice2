const {Server} = require("ws"); 

const wss = new Server({port: '3000'});

let messages = []

wss.on("connection", socket => {
    
    socket.on("message", message => {
        console.log(message);
        messages.push(message);
        wss.clients.forEach(client => client.send(message))
    })
    
    socket.on("close", ()=>{
        console.log("I'm offf")
    })
    socket.send("Welcome to the chat ")

    if(messages.length){
        socket.send("chat currently in session");
        messages.forEach(message => socket.send(message))
    }

    console.log("new socket is on")
})

console.log("chat waiting for connections on port:3000")