const { crearErrorArgumentosInvalidos } = require('../../compartido/errores/ApiError.js')
const { crearReserva } = require('../modelos/Reserva.js')

function crearReservaApi(reservasDao) {
    return {
        getById: async (dato) => {
            const IDValido = crearIDValido(dato)
            const reserva = await reservasDao.getById(IDValido)
            return reserva
        },

        getAll: async () => {
            reserva = await reservasDao.getAll()
            return reserva
        },

        createReserva: async (datos) => {
            const reserva = crearReserva(datos)
            await reservasDao.addUnique(datos, 'dni')
            return reserva
        },
        deleteById: async (dato) => {
            const idNumerico = crearIdValido(dato)
            await reservasDao.deleteById(idNumerico)
        },
        replaceById: async (datos, unId) => {
            if (!datos.idReserva || !unId || datos.idReserva != unId) {
                throw crearErrorArgumentosInvalidos('no coinciden los ids')
            }
            const reserva = crearReserva(datos)
            await reservasDao.updateByIdReserva(reserva)
            return reserva
        },

    
    }
}


function crearIdValido(dato) {
    const idNumerico = parseInt(dato)
    if (isNaN(idNumerico)) {
        throw crearErrorArgumentosInvalidos('el id de la reserva debe ser numerico')
    }
    return idNumerico
}

module.exports = { crearReservaApi }