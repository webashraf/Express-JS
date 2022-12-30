const express = require('express')
const userRouter = require('./Routes/user.route')
const app = express()
app.use(userRouter)

// app.get('/about', (req, res) =>{
//     res.statusCode = 200;
//     res.sendFile(__dirname+"/pages/index.html")
// })

module.exports = app;