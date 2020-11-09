const {
    crearErrorArgumentosInvalidos,
   
} = require('../../compartido/errores/ApiError.js')

async function crearAvionDaoMemoria() {
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
        getByID: async (id) => {
            return elementos.filter(e => e.id === id)
        },
  

        close: async () => { }
    }
}

module.exports = { crearAvionDaoMemoria }