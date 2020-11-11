const { crearErrorArgumentosInvalidos } = require('../../compartido/errores/ApiError.js')

let nextId = 1

function crearAvion(objeto) {

    const avion = {}

    if (!objeto.modeloAvion) {
        throw crearErrorArgumentosInvalidos('modelo Avion', 'campo requerido')
    } else {
        avion.modeloAvion = objeto.modeloAvion
    }

    if (!objeto.numeroAvion) {
        throw crearErrorArgumentosInvalidos('numero Avion', 'campo requerido')
    }

    if (isNaN(parseInt(objeto.numeroAvion))) {
        throw crearErrorArgumentosInvalidos('numero Avion', 'debe ser un entero')
    } else {
        avion.numeroAvion = objeto.numeroAvion
    }

    if (!objeto.capacidad) {
        throw crearErrorArgumentosInvalidos('capacidad', 'campo requerido')
    }

    if (isNaN(parseInt(objeto.capacidad))) {
        throw crearErrorArgumentosInvalidos('capacidad', 'debe contener unicamente caracteres numericos')
    } else {
        avion.capacidad = objeto.capacidad
    }

    if (!objeto.id) {
        avion.id = nextId++
    } else {
        avion.id = objeto.id
    }

    return avion
}

module.exports = { crearAvion }