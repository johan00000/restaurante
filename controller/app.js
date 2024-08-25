const { json } = require('express')
const { access } = require('fs')
const http= require('http')
const port=5000
const host="localhost"

const server = http.createServer((request,response)=>{
    try{
        if(request.method == "GET" && request.url=="/"){
            response.statusCode=200
            response.end(JSON.stringify({"view":"12"}))

        }else if(request.method == "GET" && request.url=="/vista"){
            response.statusCode=200
            response.end(JSON.stringify({"userStatus":"access"}))

        }else{
            response.statusCode=400
            response.end(JSON.stringify({"error":"access no encontrado"}))
        }
    }catch(err){
        response.end("erro en el servidor")
    }
})



server.listen(5000,()=>{
    console.log(`se esta ejecutando en http//:${host}:${port}`)
})