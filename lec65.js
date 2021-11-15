const fs= require("fs");

 let text=fs.readFile("delete.txt","utf-8",(err,data)=>{
    if(!err){
    console.log(data);
    console.log("Callback fired")}
    else 
    {console.log(err);}
})

console.log("This is the last statement"); 
