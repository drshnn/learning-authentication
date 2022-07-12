require('dotenv').config({path:"./config.env"})
const express = require('express');
const app = express()


PORT = process.env.PORT || 4444

app.listen(PORT,()=>{
    console.log(`server up and running on ${PORT}`)
})
