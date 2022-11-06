const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () =>{

    try { 
            await mongoose.connect(process.env.CONNECTMONGO)
            console.log("Base de datos conectada")
    } catch{
            console.log("No se pudo conectar")


    }
}

module.exports = {connectDB}

