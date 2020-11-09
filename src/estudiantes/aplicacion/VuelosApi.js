const { crearErrorArgumentosInvalidos } = require('../../compartido/errores/ApiError.js')
const { crearVuelo } = require('../modelos/Vuelo.js')

function creaVuelosApi(vueloDao) {
    return {
        getById: async (dato) => {
            const IDValido = crearDniValido(dato)
            const vuelo = await vueloDao.getById(IDValido)
            return vuelo
        },

        getAll: async () => {
            vuelo = await vueloDao.getAll()
            return vuelo
        },

        getAsientoDisponible: async (datos) => {
            const idVuelo = crearIdValido(datos)
            vuelo = await vueloDao.getById(idVuelo)
            vuelo
            return vuelo
        },
        //esto no se si anda
        create: async (datos) => {
            const vuelo = crearVuelo(datos)
            await vueloDao.addUnique(vuelo, 'id')
            return vuelo
        },
        deleteById: async (dato) => {
            const idNumerico = crearIdValido(dato)
            await vueloDao.deleteById(idNumerico)
        },
        replaceById: async (datos, unId) => {
            if (!datos.idVuelo || !unId || datos.idVuelo != unId) {
                throw crearErrorArgumentosInvalidos('no coinciden los ids')
            }
            const vuelo = crearVuelo(datos)
            await vueloDao.updateByIdVuelo(vuelo)
            return vuelo
        }
    }
}
function crearIdValido(dato) {
    const idNumerico = parseInt(dato)
    if (isNaN(idNumerico)) {
        throw crearErrorArgumentosInvalidos('el id del vuelo debe ser numerico')
    }
    return idNumerico
}
module.exports = { creaVuelosApi }