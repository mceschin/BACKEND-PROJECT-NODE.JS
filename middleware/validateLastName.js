const { RentalCar } = require('../models/rental');

// Middleware para validar la búsqueda de Clientes 

const validateLastname = async (req, res, next) => {
    const client = await RentalCar.findOne(req.params);
    if(client !== null) {
        next()
    } else {
        res.status(500).json({msg: 'No se encontró un cliente con ese apellido.'});
    }
}


module.exports = { validateLastname }