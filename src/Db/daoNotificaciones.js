const {
    crearErrorArgumentosInvalidos,
    crearErrorRecursoNoEncontrado
} = require('../../compartido/errores/ApiError.js')

async function crearDaoNotificaciones() {

    const elementos = []

    return {
        add: async (elemento) => {
            elementos.push(elemento)
        },
        getAll: async () => {
            return [...elementos]
        },
        getById: async (unId)=>{
            const notificacionBuscada = elementos.filter(e=>e.id===unId)
            if(!notificacionBuscada){
                throw crearErrorRecursoNoEncontrado('notificacion con id: ', unId)
            }
            return notificacionBuscada
        },
        deleteById: async (unId) => {
            const indiceABorrar = elementos.findIndex(e => e.id === unId)
            if (indiceABorrar === -1) {
                throw crearErrorRecursoNoEncontrado('notificacion con id:', unId)
            }
            elementos.splice(indiceABorrar, 1)
        },
        deleteAll: async () => {
            while (elementos.length > 0) {
                elementos.pop()
            }
        }

    }
}
module.exports = { crearDaoNotificaciones }