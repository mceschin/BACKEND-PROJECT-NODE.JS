const express = require("express")
const router = express.Router()
const {nameCheck, getAllClients, getClient,getClientById, createClient, updateClient, deleteClient,ejemploPass, consultaAxios} = require("../controller/controller")
const { check } = require ("express-validator")
const {validateId} = require("../middleware/validarld")
const {validateLastname} = require("../middleware/validateLastname")





// get
router.get('/', nameCheck )
router.get('/ver', getAllClients )
router.get('/ver/:id', validateId , getClientById);
router.get("/buscar/:lastname", validateLastname, getClient)
router.get('/pass',ejemploPass);
router.get('/axios', consultaAxios);


//post
router.post("/create",[
    check("name").not().isEmpty().withMessage("Se tiene que cargar un Nombre"),
    check("lastname").not().isEmpty().withMessage("Se tiene que cargar un Apellido"),
    check("dni").not().isEmpty().withMessage("Se tiene que cargar un dni").isLength({min:6, max:8}).withMessage('DNI inválido'),
    check("car").not().isEmpty().withMessage("Se tiene que cargar el vehiculo que se va a alquilar"),
    check("totalprice").not().isEmpty().withMessage("Se tiene que cargar el valor total de alquiler")

] ,createClient)



//put

router.put("/update/:id", validateId ,[
    check("name").not().isEmpty().withMessage("Se tiene que cargar un Nombre"),
    check("lastname").not().isEmpty().withMessage("Se tiene que cargar un Apellido"),
    check("dni").not().isEmpty().withMessage("Se tiene que cargar un dni").isLength({min:6, max:8}).withMessage('DNI inválido'),
    check("car").not().isEmpty().withMessage("Se tiene que cargar el vehiculo que se va a alquilar"),
    check("totalprice").not().isEmpty().withMessage("Se tiene que cargar el valor total de alquiler")
] ,updateClient)

//delete

router.delete("/delete/:id",validateId,deleteClient)


module.exports = router