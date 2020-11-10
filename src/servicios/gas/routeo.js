const express = require('express')

const router = express.Router()

//tiene que recibir la api por parametro y asignarla despues a una constante para usar
function aerolineasRouter({ api}) {

    //esta api se va a encargar de borrar la reserva del DAO (apiAerolineas.deleteById(id))
    const apiAerolineas = api

    router.delete('/api/:id', async (req, res) => {
        await daoReservas.deleteById(req.params.id)
        res.status(204).json()
    })

}

module.exports = { aerolineasRouter }