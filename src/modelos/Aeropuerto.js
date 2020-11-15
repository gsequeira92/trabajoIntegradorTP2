const { crearErrorArgumentosInvalidos } = require('../../compartido/errores/ApiError.js')

let nextId = 1

function crearAeropuerto(objeto) {

    const aeropuerto = {}

    if (!objeto.ciudad) {
        throw crearErrorArgumentosInvalidos('ciudad', 'campo requerido')
    } else {
        aeropuerto.ciudad = objeto.ciudad
    }


    if (!objeto.codigo) {
        throw crearErrorArgumentosInvalidos('codigo', 'campo requerido')
    }else {
        aeropuerto.codigo = objeto.codigo
    }


    if (!objeto.terminal) {
        throw crearErrorArgumentosInvalidos('terminal', 'campo requerido')
    }else {
        aeropuerto.terminal = objeto.terminal
    }



    if (!objeto.id) {
        aeropuerto.id = nextId++
    } else {
        aeropuerto.id = objeto.id
    }

    return aeropuerto
}

module.exports = { crearAeropuerto }