const express = require('express')

//tiene que recibir la api por parametro y asignarla despues a una constante para usar
function aerolineasRouter({ aerolineaApi }) {

    const router = express.Router()
    //esta api se va a encargar de borrar la reserva del DAO (apiAerolineas.deleteById(id))
    const apiAerolineas = aerolineaApi

    router.post('/ventas', async (req, res) => {

        const reserva = await apiAerolineas.venderPasaje(req.body)
        res.status(201).json(reserva)

    })

    router.put('/reservas/::id&true', async (req, res) => {
        try {
             await apiAerolineas.modificarComida(req.params)
            res.status(204).json()
        } catch (e) {
            res.status(e.getMessage).json()
        }
    })

    router.delete('/reservas/:id', async (req, res) => {

        //El try catch va aca o es parte del cliente? 
        try {
            await apiAerolineas.cancelarReserva(req.params.id)
            res.status(204).json()
        } catch (error) {
            console.log(mensajeError, error.getMessage())
            res.status(calcular).json({descripcion: error.getMessage()})
            
        }

    })

    return router
}

module.exports = { aerolineasRouter }