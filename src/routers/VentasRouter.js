const express = require('express')

function crearVentaRouter({ crearApiAerolinea }) {

    const apiAerolinea = crearApiAerolinea()
    router = express.Router()

    router.post('/ventas', async (req, res) => {
       
            const reserva = await apiAerolinea.venderPasaje(req.body)
            res.status(201).json(reserva)
     
    })
}

module.exports ={
    crearVentaRouter
}