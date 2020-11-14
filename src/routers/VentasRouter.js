const express = require('express')

function crearVentaRouter({ crearApiVenta }) {

    const apiVenta = crearApiVenta()
    router = express.Router()

    router.post('/ventas/??', async (req, res) => {
        try {
            const algo = await apiVenta.venderPasaje(req.body)
            res.status(204).json()
        } catch (e) {
            res.status(e.getMessage).json()
        }
    })
}

module.exports ={
    crearVentaRouter
}