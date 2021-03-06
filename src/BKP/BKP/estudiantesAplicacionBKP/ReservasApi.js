const { crearErrorArgumentosInvalidos } = require('../../compartido/errores/ApiError.js')
const { crearReserva } = require('../modelos/Reserva.js')

function crearReservaApi(reservasDao) {

    return {
        getReservaById: async (dato) => {
            const IDValido = validarIdNumerico(dato)
            const reserva = await reservasDao.getById(IDValido)
            return reserva
        },

        modificarComida: async (dato, bool) => {
            modificarComida(reserva,bool)
           // return reserva
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
            const idNumerico = validarIdNumerico(dato)
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
        getClienteReservaById: async (dato) =>{
            const IDValido =  validarIdNumerico(dato)
            return await reservasDao.getByDniPasajero(IDValido)
        },

    
    }
}


function validarIdNumerico(dato) {
    const idNumerico = parseInt(dato)
    if (isNaN(idNumerico)) {
        throw crearErrorArgumentosInvalidos('el id de la reserva debe ser numerico')
    }
    return idNumerico
}

function modificarComida(reserva, bool){
    //if (isNaN(reserva)) {
      //  throw crearErrorArgumentosInvalidos('reserva no encontrada')
   // }
    reserva.comidaSinTacc = bool
}

module.exports = { crearReservaApi }