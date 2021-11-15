const http= require('http');
const fs= require('fs');

const home =fs.readFileSync('./index.html');
const about =fs.readFileSync('./about.html');
const services =fs.readFileSync('./services.html');
const contact =fs.readFileSync('./contact.html');
//The Creaate Server method turns your Computer into an http Server
const server= http.createServer((req,res)=>{
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/html');
    url= req.url;
    if( url == '/'){
        res.end(home);
    } else
    if( url == '/about'){
        res.end(about);
    } else
    if( url == '/services'){
        res.end(services);
    } 
    else
    if( url == '/contact'){
        res.end(contact);
    } 
    else{
        res.end("<h1>404 not found</h1>")
    }

     //Jo kuch bhi files serve karni hai wo res.end se serve hoti hai
})

// listen method makes the server to open its ears and listen through a specific port so when user enters localhost address on the browser, the server is there to listen on that specific port
server.listen(3000, ()=>{
    console.log("SERVER IS RUNNING");
})