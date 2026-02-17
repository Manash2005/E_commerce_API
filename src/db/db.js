const mongoose = require("mongoose")
require("colors")

async function connectDB(){

    try{        
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Database".green)
    }
    catch(error){
        console.log("Database Conection Error".red , error)
        process.exit(1)

    }
}

module.exports = connectDB