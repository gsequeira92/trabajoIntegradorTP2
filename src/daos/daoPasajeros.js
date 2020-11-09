const {
    crearErrorArgumentosInvalidos,
    crearErrorRecursoNoEncontrado
} = require('../../compartido/errores/ApiError.js')

async function crearPasajeroDaoMemoria() {
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
     
        getAll: async () => {
            return [...elementos]
        },
        getByDni: async (dni) => {
            return elementos.filter(e => e.dni === dni)
        },
    
        deleteByDni: async (dni) => {
            const indiceParaBorrar = elementos.findIndex(e => e.dni == dni)
            if (indiceParaBorrar === -1) {
                throw crearErrorRecursoNoEncontrado('pasajero', dni)
            }
            elementos.splice(indiceParaBorrar, 1)
        },
        updateByDni: async (pasajero) => {
            const indiceParaReemplazar = elementos.findIndex(e => e.dni == pasajero.dni)
            if (indiceParaReemplazar === -1) {
                throw crearErrorRecursoNoEncontrado('pasajero', pasajero.id)
            }
            elementos.splice(indiceParaReemplazar, 1, pasajero)
        },
    
        close: async () => { }
    }
}

module.exports = { crearPasajeroDaoMemoria }