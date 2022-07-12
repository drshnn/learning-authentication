const mongoose = require('mongoose')
const connectDB = async()=>{
    await mongoose.connect(process.env.MONGO_URI,{
        useNewURlParser:true,
        useUnifiedTopology:true,

    })
    console.log("mongo connected")

}
module.exports = connectDB
