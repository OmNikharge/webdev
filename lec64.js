const fs= require("fs");
let text= fs.readFileSync("delete.txt", "utf-8");
// text =text.replace("this","I am")
// console.log("The content of the file is");
console.log(text);
console.log("Creating a new file");
fs.writeFileSync("rohan.txt", text );
