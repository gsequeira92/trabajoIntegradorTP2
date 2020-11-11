const {
    crearErrorArgumentosInvalidos,
    crearErrorRecursoNoEncontrado
} = require('../../compartido/errores/ApiError.js')

async function crearReservaDaoMemoria() {
    const elementos = []

    return {

        addUnique: async (elemento, claveUnica) => {
            const existe = elementos.some(e => {
                return e[claveUnica] === elemento[claveUnica]
            })
            if (existe) {
                throw crearErrorArgumentosInvalidos(claveUnica, 'debe ser unico')
            }
            elementos.push(elemento)
        },
        addAll: async (elementosNuevos) => {
            elementosNuevos.forEach(e => elementos.push(e))
        },
        getAll: async () => {
            return [...elementos]
        },
        getById: async (id) => {
            return elementos.filter(e => e.id === id)
        },
        getByDniPasajero: async (dni_pasajero) => {
            return elementos.filter(e => e.dniPasajero === dni_pasajero)
        },
        getByDniPasajero: async (id_pasajero) => {
            return elementos.filter(e => e.idPasajero === id_pasajero)
        },
        getByIdVuelo: async (id_vuelo) => {
            return elementos.filter(e => e.idVuelo === id_vuelo)
        },
        getEmailPasajero: async (id_pasajero) => {
            const pasajero = getByDniPasajero(id_pasajero)
            return pasajero.email
        },
        deleteByIdReserva: async (unId) => {
            const indiceParaBorrar = elementos.findIndex(e => e.idReserva == unId)
            if (indiceParaBorrar === -1) {
                throw crearErrorRecursoNoEncontrado('reserva', unId)
            }
            elementos.splice(indiceParaBorrar, 1)
        },
        updateByIdReserva: async (reserva) => {
            const indiceParaReemplazar = elementos.findIndex(e => e.id == estudiante.id)
            if (indiceParaReemplazar === -1) {
                throw crearErrorRecursoNoEncontrado('reserva', reserva.idReserva)
            }
            elementos.splice(indiceParaReemplazar, 1, reserva)
        },

        close: async () => { }
    }
}

module.exports = { crearReservaDaoMemoria }