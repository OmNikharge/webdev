function operations(){}
function additions(a,b)
{
    res= a+b;
    console.log(res);
}
function subtract(a,b)
{
    res= a-b;
    console.log(res);
}


// This is a way to export js code...Agar functions yaa fir objects ko alag naam dekar export karna hai to fir ye wala tarika use karo

// exports.add=additions;
// exports.sub=subtract;



//This is also a way to export various code in javascript...agar aise hi export karna hai to ye wala tareeka export karo
module.exports= additions;