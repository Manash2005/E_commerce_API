const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },

    email : {
        type : String,
        required : true,
        lowercase : true
    },

    password : {
        type : String,
        required : true
    },

    role : {
        type : String,
        enum : ["user", "seller", "admin"],
        default : "user"
    }
}, {timestamps : true})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel