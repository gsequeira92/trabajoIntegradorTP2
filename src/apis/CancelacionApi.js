const cancelacionFactory = require('../factorys/CuCancelacionFactory')

const cuCancelacion = cancelacionFactory.getCuCancelacion()

function cancelacionApi(cuCancelacion) {

    return {
        cancelarVuelo: ({ idReserva }) => {

            cuCancelacion.execute(idReserva)
        }

    }

}

module.exports = { cancelacionApi }