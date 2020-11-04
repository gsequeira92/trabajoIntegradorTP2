const { cancelarReservaVuelo } = require('../gas/CasoUsoCancelacion')
const { crearMailer } = require('../leo/mailer/mailer')
const { crearTemporizador } = require('../gas/Temporizador')
const { facturaCancelada } = require('../mati/test/appFacturaCancelacionVuelo')

try {
    const cancelacionCU = cancelarReservaVuelo(crearMailer, crearTemporizador, facturaCancelada)
    cancelacionCU.execute()
} catch (error) {
    console.log(error.message)
}
