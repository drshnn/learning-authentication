require('dotenv').config({path:"./config.env"})
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error')

//connectDb
connectDB()

const app = express()
app.use(express.json())

//routes
app.use('/api/auth/',require('./routes/auth'))

//error handler (should be last middleware)
app.use(errorHandler )
PORT = process.env.PORT || 4444



const server =    app.listen(PORT,()=>{
        console.log(`server up and running on ${PORT}`)
    })


process.on('unhandledRejection',(err,promise)=>{
    console.log(`Logged Error: ${err}`)
    server.close(()=>process.exit(1))
})
