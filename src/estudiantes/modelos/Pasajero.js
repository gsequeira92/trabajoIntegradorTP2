const { crearErrorArgumentosInvalidos } = require('../../compartido/errores/ApiError.js')

let nextId = 1

function crearPasajero(objeto) {

    const pasajero = {}

    if (!objeto.nombre) {
        throw crearErrorArgumentosInvalidos('nombre', 'campo requerido')
    } else {
        pasajero.nombre = objeto.nombre
    }

    if (!objeto.apellido) {
        throw crearErrorArgumentosInvalidos('apellido', 'campo requerido')
    } else {
        pasajero.apellido = objeto.apellido
    }

    if (!objeto.dni) {
        throw crearErrorArgumentosInvalidos('dni', 'campo requerido')
    }

    if (isNaN(parseInt(objeto.dni))) {
        throw crearErrorArgumentosInvalidos('dni', 'debe ser un entero')
    } else {
        pasajero.dni = objeto.dni
    }

    if (!objeto.mail) {
        throw crearErrorArgumentosInvalidos('mail', 'campo requerido')
    }
  // argregarla validacion de mail
    if (isNaN(parseInt(objeto.mail))) {
        throw crearErrorArgumentosInvalidos('dni', 'debe contener unicamente caracteres numericos')
    } else {
        pasajero.mail = objeto.mail
    }

    if (!objeto.id) {
        pasajero.id = nextId++
    } else {
        pasajero.id = objeto.id
    }

    return pasajero
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