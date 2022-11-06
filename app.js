const express = require('express')
const cors = require("cors")
const logger = require("morgan")
const app = express()

const clientRouter = require("./routes/client")
const { connectDB } = require("./db/db")

//configuraciones Rentalgit init:
app.use(logger("dev"))
app.use(express.json())
app.use(cors())


app.use("/",clientRouter);

connectDB()
module.exports = app