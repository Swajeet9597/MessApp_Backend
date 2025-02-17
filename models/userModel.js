const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username:{
        type:String,
        unique: true
    },
    password:{
        type:String
    },
    role:{
        type:String
    }
})

const User = mongoose.model("User",userSchema);

module.exports = User;
