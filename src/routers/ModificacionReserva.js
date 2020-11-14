const express = require('express')

function modificarComida({ modificacionApi }) {

    const apiModificacion = modificacionApi()
    router = express.Router()

    router.put('/reservas/::id&true', async (req, res) => {
        try {
            const algo = await apiModificacion.modificarComida(req.params)
            res.status(204).json()
        } catch (e) {
            res.status(e.getMessage).json()
        }
    })
}

module.exports ={
    modificarComida
}