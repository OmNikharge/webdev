

let p = new Promise((resolve,reject)=>{
    let a = 1+ 1
    if(a ==5){
        resolve('Success')
    } else
    {
        reject('Failed')
    }
})



// is this code same as
//  p.then((message)=>{
//      console.log(message)
//  })
//  p.catch((message)=>{
//      console.log(message)
//  })

 p.then((message)=>{
     console.log(message)
 }).catch((message)=>{
     console.log(message)
 })
