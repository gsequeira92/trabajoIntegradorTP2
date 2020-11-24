const express = require('express')
const { aerolineasRouter } = require('../../../routers/AerolineasRouter')

function createServer({ port = 0, aplicacion }) {

    const app = express()

    app.use(express.json())

    app.use('/api/aerolineas', aerolineasRouter({ aplicacion }))

    app.use(manejadorDeErrores)

    return new Promise((resolve, reject) => {
        const server = app.listen(port)
            .once('error', () => {
                reject(new Error('error al conectarse al servidor'))
            })
            .once('listening', () => {
                server.port = server.address().port
                resolve(server)
            })
    })
}

function manejadorDeErrores(error, req, res, next) {
    if (error.type === 'INVALID_ARGS') {
        res.status(400)
    } else if (error.type === 'NOT_FOUND') {
        res.status(404)
    } else if (error.type === 'INTERNAL_ERROR') {
        res.status(500)
    } else {
        res.status(520)
    }
    res.json({ message: error.message })
}

module.exports = { createServer }