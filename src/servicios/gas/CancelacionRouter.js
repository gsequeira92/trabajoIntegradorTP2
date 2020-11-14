const express = require('express')

//tiene que recibir la api por parametro y asignarla despues a una constante para usar
function aerolineasRouter({ aplicacion }) {

    const router = express.Router()
    //esta api se va a encargar de borrar la reserva del DAO (apiAerolineas.deleteById(id))
    const apiAerolineas = aplicacion

    router.delete('/reservas/:id', async (req, res) => {
        
        await apiAerolineas.deleteReservaById(req.params.id)
        res.status(204).json()
    })

}

module.exports = { aerolineasRouter }