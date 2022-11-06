const { Schema } = require("mongoose")
const {RentalCar} = require("../models/rental")
const {validationResult} = require("express-validator")
const bcrypt = require('bcryptjs');
const axios = require('axios');

const nameCheck = (req, res) => {
    res.send('El cliente ya esta cargado en la base de datos');
}

const getAllClients = async (req, res) => {
    const client = await RentalCar.find();
    res.status(200).json({client});
}


const getClient = async (req, res) => {
    const client = await RentalCar.findOne({lastname: req.params.lastname});
    res.status(200).json({client});
}

const getClientById = async (req, res) => {
    const client = await RentalCar.findById(req.params.id);
    res.status(200).json({client});
}

const createClient = async (req, res) => {
    try {
        const err = validationResult(req)
        if(err.isEmpty()) {
            const client = new RentalCar(req.body);
            await client.save();
            res.status(201).json({client});
        } else {
            res.status(501).json({err});
        }
        
    } catch (error) {
        res.status(501).json({error});
    }
    
}

const updateClient = async (req, res) => {
    try {
        const err = validationResult(req);
        if (err.isEmpty()) {
            await RentalCar.findByIdAndUpdate(req.params.id, req.body);
            res.status(501).json({msg:"Se realizo actualización de manera exitosa"})
        } else {
            res.status(501).json({err});
        }
    } catch (error) {
        res.status(501).json({error});
    }
}

const deleteClient = async (req, res) => {
    const client = await RentalCar.findByIdAndDelete(req.params.id);
    res.status(200).json({msg: 'Cliente eliminado exitosamente'})
}



// PASS Y AXIOS 


const ejemploPass = async (req, res) => {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.pass, salt);
    let comparison = bcrypt.compareSync(req.body.pass, hash)
    let comparison2 = bcrypt.compareSync("123456", hash)
    res.json({hash, comparison, comparison2})
}


const consultaAxios = async (req, res) => {
    try {
        const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
        res.status(200).json({data: answer.data, status: answer.status});

    } catch (error) {
        res.json({status: error.response.status, data: error.response.data})
    }
}



module.exports = { nameCheck, getAllClients, getClient, createClient, updateClient, deleteClient ,getClientById, ejemploPass, consultaAxios }
