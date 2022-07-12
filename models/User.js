const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please Provide a username"]
    },
    email:{
        type:String,
        require:[true,"Please Provide an email"],
        unique:true,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please Provide a vaild email"]
    },
    password:{
        type:String,
        required:[true,"Please enter a password"],
        minlength:6,
        select:false
    },
    resetPasswordToken: String,
    resetPasswordToken: Date
});


UserSchema.pre('save',async function(next){
    if(!this.isModified("password")){
        next();

    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
    next();
})

const User = mongoose.model("User",UserSchema);

module.exports = User;
