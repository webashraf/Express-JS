const app = require('./app');
const PORT = 4000;
const express = require('express')
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const middleWere = (req, res, next) =>{
    console.log('Middle were function')
    req.currentTime = new Date(Date.now())
    next();
}

app.use(middleWere)
app.get('/', (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname+"/pages/index.html")
    console.log('Home route ' + req.currentTime)
})

app.get('/register', (req, res) =>{
    res.statusCode = 200;
    console.log('This is register ' + req.currentTime)
    res.sendFile(__dirname+"/pages/register.html")
})
app.post('/register', (req, res) =>{
    res.statusCode = 200
    const userName = req.body.userName;
    const age = req.body.userNumber
    res.send('Hello ' + userName + age)
})

app.post('/user', (req, res) =>{
    const name = req.body.name
    res.send('ID is = ' + name);
})



app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`)
})