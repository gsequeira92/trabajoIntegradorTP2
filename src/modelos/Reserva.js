const { crearErrorArgumentosInvalidos } = require('../../compartido/errores/ApiError.js')

let nextId = 1

function crearReserva(objeto) {

    const reserv = {}

    if (!objeto.idVuelo) {
        throw crearErrorArgumentosInvalidos('idVuelo', 'campo requerido')
    } else {
        reserv.idVuelo = objeto.idVuelo
    }

    if (!objeto.destino) {
        throw crearErrorArgumentosInvalidos('destino', 'campo requerido')
    } else {
        reserv.destino = objeto.destino
    }

    if (!objeto.origen) {
        throw crearErrorArgumentosInvalidos('destino', 'campo requerido')
    } else {
        reserv.origen = objeto.origen
    }

    if (!objeto.asiento) {
        throw crearErrorArgumentosInvalidos('asiento', 'campo requerido')
    }

    if (!objeto.clase) {
        reserv.clase = "economica"
    }
    if (!objeto.comidaSinTacc) {
        throw crearErrorArgumentosInvalidos('comidaSinTacc', 'campo requerido')
    }else {
        reserv.comidaSinTacc = objeto.comidaSinTacc
    }

    if (!objeto.dniPasajero) {
        throw crearErrorArgumentosInvalidos('dniPasajero', 'campo requerido')
    }

    if (isNaN(parseInt(objeto.dniPasajero))) {
        throw crearErrorArgumentosInvalidos('dniPasajero', 'debe contener unicamente caracteres numericos')
    } else {
        reserv.dniPasajero = objeto.dniPasajero
    }
    
    if (!objeto.id) {
        reserv.id = nextId++
    } else {
        reserv.id = objeto.id
    }

    return reserv
}

module.exports = { crearReserva }