const { crearErrorArgumentosInvalidos } = require('../../compartido/errores/ApiError.js')

let nextId = 1

function crearReserva(objeto) {

    const estu = {}

    if (!objeto.nombre) {
        throw crearErrorArgumentosInvalidos('nombre', 'campo requerido')
    } else {
        estu.nombre = objeto.nombre
    }

    if (!objeto.apellido) {
        throw crearErrorArgumentosInvalidos('apellido', 'campo requerido')
    } else {
        estu.apellido = objeto.apellido
    }

    if (!objeto.edad) {
        throw crearErrorArgumentosInvalidos('edad', 'campo requerido')
    }

    if (isNaN(parseInt(objeto.edad))) {
        throw crearErrorArgumentosInvalidos('nombre', 'debe ser un entero')
    } else {
        estu.edad = objeto.edad
    }

    if (!objeto.dni) {
        throw crearErrorArgumentosInvalidos('dni', 'campo requerido')
    }

    if (isNaN(parseInt(objeto.dni))) {
        throw crearErrorArgumentosInvalidos('dni', 'debe contener unicamente caracteres numericos')
    } else {
        estu.dni = objeto.dni
    }

    if (!objeto.id) {
    estu.id = nextId++
    } else {
        estu.id = objeto.id
    }

    return estu
}

module.exports = { crearReserva }