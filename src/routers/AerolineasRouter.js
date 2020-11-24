const express = require('express')
const { manejadorDeErrores} = require('../routers/manejadorErrores')

//tiene que recibir la api por parametro y asignarla despues a una constante para usar
function aerolineasRouter({ aerolineaApi }) {

    const router = express.Router()
    const apiAerolineas = aerolineaApi

    router.post('/ventas', async (req, res) => {

        const reserva = await apiAerolineas.venderPasaje(req.body)
        res.status(201).json(reserva)

        
        try {
            const reserva = await apiAerolineas.venderPasaje(req.body)
             res.status(201).json(reserva)
         } catch (error) {
         manejadorDeErrores(error,req,res)
            
         }

    })

    router.put('/reservas/::id&true', async (req, res) => {
        try {
             await apiAerolineas.modificarComida(req.params)
            res.status(204).json()
        } catch (error) {
            //Te agrego el manejador de errores mati, solo si lo queres usar bien ahiii
            manejadorDeErrores(error,req,res)
            
        }
    })

    router.delete('/reservas/:id', async (req, res) => {

        try {
            await apiAerolineas.cancelarReserva(req.params.id)
            res.status(204).json()
        } catch (error) {
            manejadorDeErrores(error,req,res)
        }

    })

    return router
}

module.exports = { aerolineasRouter }