console.log("THis is Tutorial 53");

let name1= " Om ";
let name2= "Aditya ";
let name3= "Atharva ";
let name4= "Saish ";

let gtext="Good Morning ";

// console.log(name1 + "is a good Boy");
// console.log(name2 + "is a good Boy");
// console.log(name3 + "is a good Boy");
// console.log(name4 + "is a good Boy");

function sample(x, y="Hello")
{
    console.log(x + "is a good boy");
    console.log(y + x);
}
sample(name1,gtext);
sample(name2,gtext);
sample(name3,gtext);
sample(name4,gtext);


// Now let us see a functuon that returns something
//You can return any value such as numbers or strings and objects as well

function sum(num1,num2,num3)
{
    addition= num1+ num2 +num3;
    return addition;
    console.log("Returned") //This line will not get printed bcoz function is ended after return
}
let returnval= sum("I ","Love ","Cricket");
console.log(returnval);

let returnval1= sum(244,6,50);
console.log(returnval1);