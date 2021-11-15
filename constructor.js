// const { text } = require("express");

function IplTeam(funct){
    // this.TeamName= tname,
    // this.jerseyColor = jcolor,
    // this.trophies= trophy,
    // this.stateName= state,
    // this.captainName= captain
     
    this.thenn= funct
   
}

// New keyword creates a new instance of the Constructor
// console.log(new IplTeam("RCB","Red",0,"Bengalaru","Virat Kohli"));

let rcb= new IplTeam((txt)=>{
    console.log("Hello " +txt);
});

rcb.thenn("OM")
// Creating new objects from a Constructor... (Do not get confused with 'objects' because anything that is not a primitive data type is an object in Javascript)

// let mi= new IplTeam("MI","Blue",5,"Maharashtra","Rohit Sharma");
// let dc= new IplTeam("DC","Blue",0,"Delhi","Shreyas Iyyer");
// let kkr= new IplTeam("KKR","Purple",2,"Kolkata","Eoin Morgan");
// let kxip= new IplTeam("KKR","Orange",0,"Punjab","Kl Rahul");
// let csk= new IplTeam("CSK","Yellow",3,"Chennai","Ms Dhoni");
// let rr= new IplTeam("RR","Blue",1,"Rajasthan","Sanju Samson");

// console.log(rcb.trophies)
// console.log(dc);
// console.log(rr);
// console.log(mi);
// console.log(kkr);
// console.log(csk);
// console.log(kxip);

// rcb.slogan();