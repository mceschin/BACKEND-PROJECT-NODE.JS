const {RentalCar} = require ("../models/rental")


const validateId = async (req, res, next) => {
    const client = await RentalCar.findById(req.params.id)
    if (client !== null) {
        next()
    } else{
        res.status(500).json({msg: "El Id es invalido, no existe"})
    }


}

module.exports = {validateId}