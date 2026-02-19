const mongoose = require("mongoose")
require("colors")

async function connectDB(){

    try{        
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Database".green)
    }
    catch(error){
        console.log("Database Connection Error:".red)
        console.log(error.message)
        console.log("\nMake sure:")
        console.log("1. MongoDB Atlas is running")
        console.log("2. Your IP is whitelisted in MongoDB Atlas")
        console.log("3. MONGO_URI is correct in .env")
        console.log("4. You have internet connection")
    }
}

module.exports = connectDB