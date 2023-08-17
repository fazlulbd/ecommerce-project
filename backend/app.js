const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const createError = require('http-errors')


const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))





app.get('/test', (req, res)=> {
    console.log(req.body.id)
    res.status(200).send({
        message: 'user  profile is returned' 
    })
})



app.get('/', function (req, res) {
  res.send('Hello Programer')
})

// client error handling
app.use((req, res, next)=>{
    createError(404, 'route not found')
    next()
})
// server error handling
app.use((err, req, res, next)=>{
    return res.status(err.status || 500).json({
        success: false,
        message: err.message,
    })
})

module.exports = app;