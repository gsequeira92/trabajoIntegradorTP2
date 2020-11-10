const { crearErrorArgumentosInvalidos } = require('../../compartido/errores/ApiError.js')

let nextId = 1

function crearVuelo(objeto) {

    const vuelo = {}

    if (!objeto.precio) {
        throw crearErrorArgumentosInvalidos('precio', 'campo requerido')
    } else {
        vuelo.nombre = objeto.nombre
    }
    if (isNaN(parseFloat(objeto.precio))) {
        throw crearErrorArgumentosInvalidos('precio', 'debe contener unicamente caracteres numericos')
    } else {
        vuelo.precio = objeto.precio
    }

    if (!objeto.duracion) {
        throw crearErrorArgumentosInvalidos('duracion', 'campo requerido')
    } 
    if (isNaN(Date.parse(objeto.duracion))) {
        throw crearErrorArgumentosInvalidos('duracion', 'debe contener unicamente caracteres con formato Date')
    } else {
        vuelo.duracion = objeto.duracion
    }

    if (!objeto.partida) {
        throw crearErrorArgumentosInvalidos('partida', 'campo requerido')
    } 
    if (isNaN(Date.parse(objeto.partida))) {
        throw crearErrorArgumentosInvalidos('partida', 'debe contener unicamente caracteres con formato Date')
    } else {
        vuelo.partida = objeto.partida
    }

    if (!objeto.arribo) {
        throw crearErrorArgumentosInvalidos('arribo', 'campo requerido')
    } 
    if (isNaN(Date.parse(objeto.arribo))) {
        throw crearErrorArgumentosInvalidos('arribo', 'debe contener unicamente caracteres con formato Date')
    } else {
        vuelo.arribo = objeto.arribo
    }

    if (!objeto.millaje) {
        throw crearErrorArgumentosInvalidos('millaje', 'campo requerido')
    }

    if (isNaN(parseInt(objeto.millaje))) {
        throw crearErrorArgumentosInvalidos('millaje', 'debe contener unicamente caracteres numericos')
    } else {
        vuelo.millaje = objeto.millaje
    }

    if (!objeto.numeroAvion) {
        throw crearErrorArgumentosInvalidos('numeroAvion', 'campo requerido')
    }

    if (isNaN(parseInt(objeto.dni))) {
        throw crearErrorArgumentosInvalidos('numeroAvion', 'debe contener unicamente caracteres numericos')
    } else {
        vuelo.numeroAvion = objeto.numeroAvion
    }

    if (!objeto.horaPartida) {
        throw crearErrorArgumentosInvalidos('horaPartida', 'campo requerido')
    }

    if (isNaN(parseInt(objeto.horaPartida))) {
        throw crearErrorArgumentosInvalidos('horaPartida', 'debe contener unicamente caracteres numericos')
    } else {
        vuelo.horaPartida = objeto.horaPartida
    }

    if (!objeto.horaLlegada) {
        throw crearErrorArgumentosInvalidos('horaLlegada', 'campo requerido')
    }

    if (isNaN(parseInt(objeto.horaLlegada))) {
        throw crearErrorArgumentosInvalidos('horaLlegada', 'debe contener unicamente caracteres numericos')
    } else {
        vuelo.horaLlegada = objeto.horaLlegada
    }

    if (!objeto.id) {
    vuelo.id = nextId++
    } else {
        vuelo.id = objeto.id
    }

    return vuelo
}

module.exports = { crearVuelo }