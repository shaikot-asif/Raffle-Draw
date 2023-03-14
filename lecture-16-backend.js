// // //we will never call it, Express will invocked it automiticly
// // //it is middleware

// // function xyz(req,res,next){
// //     next();
// // }

// // //it is controller
// // function cntrl(req,res,next)
// // {
// //     res.send();
// // }

// const express = require('express')
// const app = express()

// const simpleLogger = (req,res,next)=>{
//     console.log(req.url,'--',req.method,'--',new Date().toDateString());
//     next()
// }

// app.use(simpleLogger)

// app.get('/',(req,res,next)=>{
//     res.json({message:"Message"})
// })

// app.get('/home',(req,res,next)=>{
//     res.json({message:"Sweet Home"})
// })


// app.listen(8000,()=>{
//     console.log("Application running on port 8000");
// })