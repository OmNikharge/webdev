const express = require('express');
const { dirname } = require('path');
const path = require('path')
const app= express();
const port= 80;

//app.use() mounts the specified middleware function at the specified path:the middleware function is executed when the base of the requested path matches path.
app.use('/public', express.static('public')) //the following code is used to serve images, CSS files, and Javascript files in a directory named static



//PUG SPECIFIC STUFF


// Setting the template engine as pug
app.set('view engine','pug')

//sets the view directory
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req,res)=>{
    const params= {'title': 'Pubg is the best game','content':'This my my tiny little good content'}
    res.status(200).render('index.pug',params)
})

app.post('/', (req,res)=>{
    const params= {'message': 'Your Form has been submitted successfully'}
    res.status(200).render('index.pug', params)
})
//  //Our pug demo endpoint
//  app.get('/demo', (req, res)=> {
//     res.render('demo', { title: 'Hey', message: 'Hello there and thanks for telling me how to use Pubg!!!!!' })
//   });



  

// app.get("/", (req,res)=>{
//     res.status(200).send("This is my first app with harry")
// });

// //Routes the http get requests to the specified path with the specified callback functions
// app.get("/about", (req,res)=>{
//     res.send("This is my about")
// });


// app.post("/about", (req,res)=>{
//     res.send("This is post request of my app.js")
// });



//Start Server
app.listen(port,()=>{
    console.log(`The application has started successfully on port ${port}`);
    })

    