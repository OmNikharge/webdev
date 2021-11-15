let data= [5,3,6,7,8,9];
// data.push(5);
// data.push(6);
// data.pop();
// console.log(data);

// for (x of data) {
//     console.log(x + " Is a good  boy");
// }


data.forEach(function s(val, y) { console.log(y + ": This is " + val) });

//For of Loop
for(x of data){
    console.log("Hello! "+x);
}