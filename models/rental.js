const mongoose = require("mongoose")

const Schema = mongoose.Schema
const rental = new Schema ({
    name:{
        type: String,
        required: true
    },

    lastname:{
        type: String,
        required: true
    },


    dni:{
        type: Number,
        required: true,
        unique: true
        
    },

    car:{
        type: String,
        required: true,
        
    },

    totalprice: {
        type: Number,
        required: true,
    }

})

const RentalCar = mongoose.model("RentalCar", rental)

module.exports = { RentalCar }