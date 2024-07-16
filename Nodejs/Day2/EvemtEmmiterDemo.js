const { resolve } = require("path");

function createEvents(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Event will be called after 1 sec")
        },5000)
    })
}

createEvents().then((message)=>{
console.log("Event caalled after 1 sec", message)
})