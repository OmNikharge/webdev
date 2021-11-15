// Step 1: Importing the http module
const http = require('http');

const fs= require('fs');


// Step 2: We are maksing this computer, a server using createServer() function of http module
const server = http.createServer(function(req,res){ 
    // Step 4: After making the Server to listen to the request, now we are responding to the Client
    res.writeHead(200,{'Content-type':'text/html'})
    fs.readFile('lec40.html', function(error,data){
        if(error){
            res.writeHead("Error:File not Found")
        }else{
            res.write(data)
        }
        res.end();
    }) 
    
})


//Step 3: Makes the Server to listen
server.listen(3000, (error)=>{
    if(error){
        console.log("Something went wrong wrong",error)
    }else{
    console.log("Server is listening on port:3000"); }
})