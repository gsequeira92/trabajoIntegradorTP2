const { crearErrorArgumentosInvalidos } = require('../../compartido/errores/ApiError.js')
const { crearPasajero } = require('../modelos/Pasajero.js')

function crearPasajerosApi(pasajerosDao) {
    return {
        getByDni: async (dato) => {
            const dniValido = dniValido(dato)
            const pasajero = await pasajerosDao.getByDni(dniValido)
            return pasajero
        },

        getAll: async () => {
            pasajeros = await pasajerosDao.getAll()
            return pasajeros
        },

   
        agregarPasajero: async (datos) => {
            const pasajero = crearPasajero(datos)
            await pasajerosDao.addUnique(pasajero, 'dni')
            return pasajero
        },
        deleteById: async (dato) => {
               const dniValido = dniValido(dato)
            await pasajerosDao.deleteById(idNumerico)
        },
        
        replaceById: async (datos, unDni) => {
            if (!datos.dni || !unDni || datos.dni != unDni) {
                throw crearErrorArgumentosInvalidos('no coinciden los dnis')
            }
            const pasajero = crearpasajero(datos)
            await pasajerosDao.updateById(pasajero)
            return pasajero
        },
        existePasajero: async (dato) => {
            const existe = false

            const pasajero =  await pasajerosDao.getByDni(dato)
            if (!isNaN(pasajero)) {
                existe = true
            }

            return existe

        },
     


    }
}

function dniValido(dato) {
    const idNumerico = parseInt(dato)
    if (isNaN(idNumerico)) {
        throw crearErrorArgumentosInvalidos('el dni del pasajero debe ser numerico')
    }
    return idNumerico
}

module.exports = { crearPasajerosApi }