const express = require("express")
const cookieParser = require("cookie-parser")
const authRoutes = require("./routes/auth.routes")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(cors({
    origin : "http://localhost:5000/api",
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())


app.use("/api", authRoutes)


module.exports = app