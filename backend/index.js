const express = require("express")
const { authRoutes } = require("./routes/routes")
const dotenv = require("dotenv");

const cors = require("cors");
const dbConnection = require("./database/dbConn");

const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())
app.use("/api/auth", authRoutes)

app.listen(5000, () => {
    dbConnection()
    console.log("Server running on port number: 5000")
})