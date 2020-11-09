const {
    
    crearErrorRecursoNoEncontrado
} = require('../../compartido/errores/ApiError.js')



async function crearAeropuertoDaoMemoria() {
    const elementos = []

    return {
        add: async (elemento) => {
            elementos.push(elemento)
        },
        getAll: async () => {
            return [...elementos]
        },
        getByID: async (id) => {
            return elementos.filter(e => e.id === id)
        },
      
        deleteById: async (unId) => {
            const indiceParaBorrar = elementos.findIndex(e => e.id == unId)
            if (indiceParaBorrar === -1) {
                throw crearErrorRecursoNoEncontrado('destino', unId)
            }
            elementos.splice(indiceParaBorrar, 1)
        },

        deleteAll: async () => {
            while (elementos.length > 0) {
                elementos.pop()
            }
        },
        close: async () => { }
    }
}

module.exports = { crearAeropuertoDaoMemoria }