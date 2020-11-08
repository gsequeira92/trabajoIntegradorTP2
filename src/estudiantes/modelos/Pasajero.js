const { crearErrorArgumentosInvalidos } = require('../../compartido/errores/ApiError.js')

let nextId = 1

function crearPasajero(objeto) {

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
/*
    function pasajeroValido(pasajero) {  // esta bien esto? 
        const valido = true
        if (!stringValido(pasajero.nombre)) {
            throw new Error('Nombre del pasajero vacio')
        }
        if (!stringValido(pasajero.apellido)) {
            throw new Error('Apellido del pasajero vacio')
        }
        if (pasajero.edad < '0' || pasajero.edad > '115') {
            throw new Error('Edad del pasajero incorrecta')
        }
        if (!stringValido(pasajero.dni)) {
            throw new Error('Dni del pasajero vacio')
        }
        if (!esCorreoElectronico(pasajero.mail)) {
            throw new Error('Email del pasajero incorrecto')
        }

        return valido
    }
*/
module.exports = { crearPasajero }