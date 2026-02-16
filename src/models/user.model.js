const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        Type : String,
        trim : true,
        required : true,
    },

    email : {
        type : String,
        required : true,
        lowercase : true,
        trim : true
    },

    password : {
        type : String,
        required : true,
        select : false
    },

    role : {
        type : String,
        enum : ["user", "seller", "admin"],
        default : "user"
    }
}, {timestamps : true})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel