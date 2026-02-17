const express = require("express")
const cookieParser = require("cookie-parser")
const authRoutes = require("./routes/auth.routes")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cookieParser())


app.use("/api", authRoutes)


module.exports = app