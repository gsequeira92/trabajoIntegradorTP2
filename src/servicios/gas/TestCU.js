const { cancelarReservaVuelo } = require('../gas/CasoUsoCancelacion')


try {
    const cancelacionCU = cancelarReservaVuelo(reservasApi)
    cancelacionCU.execute(idCliente, idReserva)
} catch (error) {
    console.log(error.message)
}
