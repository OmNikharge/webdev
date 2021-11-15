// let laptop= {
//     cpu: 'i9',
//     ram: 16,
//     welcome: function(){
//         console.log("Welcome to Windows operating System")
//     }
// }

// laptop.welcome(); //THis is the way of accessing properties of an object.



// //This Keyword is used to call the value form the same object
let rcb= {
    bat: "Virat Kohli",
    bowl: "Siraj",
    trophy: 0,
    greet: function(){
        console.log(this.bat + " Welcomes you to RCB");
    }
}
// rcb.greet();


let mi= {
    bat: "Rohit Sharma",
    bowl: "Bumrah",
    trophy: 5,
    greet: function(){
        console.log(this.bat + " Welcomes you to MI");
    },

    compare: function(){
        if(this.trophy>rcb.trophy)
        console.log("MI is a great team"); else
        console.log("RCB is a great team");

    }
}
// mi.greet();
mi.compare();


// function getBestTeam(){

//     if(rcb.trophy> mi.trophy){
//     console.log("RCB is Great");
// }
// else
// {
//     console.log("MI is great ");
// }

// }
// getBestTeam();

