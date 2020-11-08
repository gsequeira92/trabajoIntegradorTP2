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
            const rango = crearRangoValido(datos)
            vuelo = await vueloDao.getByAge(rango)
            return vuelo
        },
        createVuelo: async (datos) => {
            const vuelo = crearVuelo(datos)
            await vueloDao.addUnique(vuelo, 'dni')
            return vuelo
        },
        deleteById: async (dato) => {
            const idNumerico = crearIdValido(dato)
            await vueloDao.deleteById(idNumerico)
        },
        replaceById: async (datos, unId) => {
            if (!datos.id || !unId || datos.id != unId) {
                throw crearErrorArgumentosInvalidos('no coinciden los ids')
            }
            const vuelo = crearVuelo(datos)
            await vueloDao.updateById(vuelo)
            return vuelo
        }
    }
}
function crearIdValido(dato) {
    const idNumerico = parseInt(dato)
    if (isNaN(idNumerico)) {
        throw crearErrorArgumentosInvalidos('el id del estudiante debe ser numerico')
    }
    return idNumerico
}
module.exports = { creaVuelosApi }