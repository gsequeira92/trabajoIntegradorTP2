const express = require('express')
const aerolineaApi = require('../apis/AerolineaApi')

//tiene que recibir la api por parametro y asignarla despues a una constante para usar
function aerolineasRouter({ aerolineaApi }) {

    const router = express.Router()
    //esta api se va a encargar de borrar la reserva del DAO (apiAerolineas.deleteById(id))
    const apiAerolineas = aerolineaApi

    router.delete('/reservas/:id', async (req, res) => {

        try {
            await apiAerolineas.cancelarReserva(req.params.id)
            res.status(204).json()
        } catch (error) {
            const mensajeError =  res.statusMessage()
            console.log(mensajeError, error.getMessage())
            res.status(res.statusCode).json()
        }

    })

}

module.exports = { aerolineasRouter }