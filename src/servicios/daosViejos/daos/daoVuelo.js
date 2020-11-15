const {
    crearErrorArgumentosInvalidos,
    crearErrorRecursoNoEncontrado
} = require('../../compartido/errores/ApiError.js')

async function crearVueloDaoMemoria() {
    const elementos = []

    return {
        add: async (elemento) => {
            elementos.push(elemento)
        },
        addUnique: async (elemento, claveUnica) => {
            const existe = elementos.some(e => {
                return e[claveUnica] === elemento[claveUnica]
            })
            if (existe) {
                throw crearErrorArgumentosInvalidos(claveUnica, 'debe ser unico')
            }
            elementos.push(elemento)
        },
       
        getAll: async () => {
            return [...elementos]
        },
        getById: async (id) => {
            return elementos.filter(e => e.id === id)
        },
        
        deleteById: async (unId) => {
            const indiceParaBorrar = elementos.findIndex(e => e.id == unId)
            if (indiceParaBorrar === -1) {
                throw crearErrorRecursoNoEncontrado('vuelo', unId)
            }
            elementos.splice(indiceParaBorrar, 1)
        },
        updateByIdVuelo: async (vuelo) => {
            const indiceParaReemplazar = elementos.findIndex(e => e.id == vuelo.id)
            if (indiceParaReemplazar === -1) {
                throw crearErrorRecursoNoEncontrado('vuelo', estudiante.id)
            }
            elementos.splice(indiceParaReemplazar, 1, vuelo)
        },

        close: async () => { }
    }
}

module.exports = { crearVueloDaoMemoria }