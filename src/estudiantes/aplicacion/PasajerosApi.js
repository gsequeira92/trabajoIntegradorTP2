const { crearErrorArgumentosInvalidos } = require('../../compartido/errores/ApiError.js')
const { crearPasajero } = require('../modelos/Pasajero.js')

function crearPasajerosApi(pasajerosDao) {
    return {
        getByDni: async (dato) => {
            const dniValido = crearDniValido(dato)
            const pasajero = await pasajerosDao.getByDni(dniValido)
            return pasajero
        },

        getAll: async () => {
            pasajeros = await pasajerosDao.getAll()
            return pasajeros
        },
        //no se si sirve
        getByAge: async (datos) => {
            const rango = crearRangoValido(datos)
            pasajeros = await pasajerosDao.getByAge(rango)
            return pasajeros
        },
        create: async (datos) => {
            const pasajero = crearEstudiante(datos)
            await pasajerosDao.addUnique(pasajero, 'dni')
            return pasajero
        },
        deleteById: async (dato) => {
            const idNumerico = crearIdValido(dato)
            await pasajerosDao.deleteById(idNumerico)
        },
        //para el CU de modificacion
        replaceById: async (datos, unId) => {
            if (!datos.id || !unId || datos.id != unId) {
                throw crearErrorArgumentosInvalidos('no coinciden los ids')
            }
            const pasajero = crearpasajero(datos)
            await pasajerosDao.updateById(pasajero)
            return pasajero
        },
        exist: async (dato) => {
            const existe = false

            const pasajero = getByDni(dato)
            if (!isNaN(pasajero)) {
                existe = true
            }

            return existe

        },
        agregarPasajero: async (datos) => {
            await pasajerosDao.addUnique
        }


    }
}
/* // 

function crearIdValido(dato) {
    if (isNaN(dato)) {
        throw crearErrorArgumentosInvalidos('el dni del estudiante debe ser numerico')
    }
    return dato
}
*/
function crearIdValido(dato) {
    const idNumerico = parseInt(dato)
    if (isNaN(idNumerico)) {
        throw crearErrorArgumentosInvalidos('el id del estudiante debe ser numerico')
    }
    return idNumerico
}

module.exports = { crearPasajerosApi }