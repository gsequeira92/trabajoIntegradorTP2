const express = require('express')

let wrap = fn => (...args) => fn(...args).catch(args[2])

function crearEstudiantesRouter({ aplicacion }) {
    router = express.Router()

    const estudiantesApi = aplicacion

    router.get('/', wrap(async (req, res) => {
        const estudiantes = await handleGet(estudiantesApi, req.query)
        res.json(estudiantes)
    }))

    router.post('/', wrap(async (req, res) => {
        const estudiante = await estudiantesApi.create(req.body)
        res.status(201).json(estudiante)
    }))

    router.delete('/:id', wrap(async (req, res) => {
        await estudiantesApi.deleteById(req.params.id)
        res.status(204).json()
    }))

    router.put('/:id', wrap(async (req, res) => {
        const estudiante = await estudiantesApi.replaceById(req.body, req.params.id)
        res.json(estudiante)
    }))

    return router
}

async function handleGet(api, query) {
    if (query.dni) {
        return await api.getByDni(query.dni)
    }

    if (query.desde && query.hasta) {
        const rango = {
            desde: query.desde,
            hasta: query.hasta
        }
        return await api.getByAge(rango)
    }

    return await api.getAll()
}

module.exports = { crearEstudiantesRouter }