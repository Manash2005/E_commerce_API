const app = require("./src/app")
require("colors")
const connectDB = require("./src/db/db")

connectDB()

const PORT = 3000

app.listen(PORT , () => {
    console.log("Server is running".blue)
})