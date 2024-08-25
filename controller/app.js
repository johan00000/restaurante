const { json } = require('express')
const { access } = require('fs')
const http= require('http')
const port=5000
const host="localhost"

const server =http.createServer((request,response)=>{
    response.end('hola mundo')

    try{
        if(request.method == "GET" && request.url=="/"){
            response.end(JSON.stringify({"view":"1"}))

        } else if(request.method == "GET" && request.url=="vista1"){
            response.end(JSON.stringify({"userStatus":"access"}))

        }
    }catch{
        response.end("la ruta no esta encontrada")
    }
})



server.listen(5000,()=>{
    console.log(`se esta ejecutando en http//:${host}:${port}`)
})