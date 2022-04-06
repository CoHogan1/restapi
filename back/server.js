// jwt.io
// main server
const colors = require('colors')
const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleWare/errorMiddleWare')
const connectDB = require('./config/db')

const port = process.env.PORT || 5001

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

// home route.
app.get('/', (req, res)=>{
    res.status(200).send(`home`)
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})
