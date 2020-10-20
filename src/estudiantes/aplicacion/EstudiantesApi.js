const { crearErrorArgumentosInvalidos } = require('../../compartido/errores/ApiError.js')
const { crearEstudiante } = require('../modelos/Estudiante.js')

function crearEstudiantesApi(estudiantesDao) {
    return {
        getByDni: async (dato) => {
            const dniValido = crearDniValido(dato)
            const estudiantes = await estudiantesDao.getByDni(dniValido)
            return estudiantes
        },

        getAll: async () => {
            estudiantes = await estudiantesDao.getAll()
            return estudiantes
        },

        getByAge: async (datos) => {
            const rango = crearRangoValido(datos)
            estudiantes = await estudiantesDao.getByAge(rango)
            return estudiantes
        },
        create: async (datos) => {
            const estudiante = crearEstudiante(datos)
            await estudiantesDao.addUnique(estudiante, 'dni')
            return estudiante
        },
        deleteById: async (dato) => {
            const idNumerico = crearIdValido(dato)
            await estudiantesDao.deleteById(idNumerico)
        },
        replaceById: async (datos, unId) => {
            if (!datos.id || !unId || datos.id != unId) {
                throw crearErrorArgumentosInvalidos('no coinciden los ids')
            }
            const estudiante = crearEstudiante(datos)
            await estudiantesDao.updateById(estudiante)
            return estudiante
        }
    }
}

function crearDniValido(dato) {
    if (isNaN(dato)) {
        throw crearErrorArgumentosInvalidos('el dni del estudiante debe ser numerico')
    }
    return dato
}

function crearRangoValido(obj) {
    const rango = {
        desde: parseInt(obj.desde),
        hasta: parseInt(obj.hasta)
    }

    if (isNaN(rango.desde) || isNaN(rango.hasta)) {
        throw crearErrorArgumentosInvalidos('el rango de edades debe ser numerico')
    }

    return rango
}

function crearIdValido(dato) {
    const idNumerico = parseInt(dato)
    if (isNaN(idNumerico)) {
        throw crearErrorArgumentosInvalidos('el id del estudiante debe ser numerico')
    }
    return idNumerico
}

module.exports = { crearEstudiantesApi }