#!/usr/bin/env node 

const parseArgs = require("minimist");
const {stdout: log} = require("single-line-log")
const {time} = parseArgs(process.argv); 
const Timer = require("tiny-timer")
if(!time){
    throw new Error("time required")
}
if(!parseInt(time)){
    throw new Error("time must be a number")
}

console.log("🚀 ~ time", time);

const count = parseInt(time);
let message =""; 
for(let i =0; i < count; i++){
    message += '*'
}

log(message);

const timer = new Timer({interval: 1000}); 
timer.on("tick", ()=>{
    log(message); 
    message = message.slice(1);
})

timer.start(count*1000)

log(message);


