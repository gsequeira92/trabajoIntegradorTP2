const { cancelarReservaVuelo } = require('../gas/CasoUsoCancelacion')
const { crearMailer } = require('../leo/mailer/mailer')
const { crearTemporizador } = require('../gas/Temporizador')
const { facturaCancelada } = require('../mati/test/appFacturaCancelacionVuelo')

try {
    const main = cancelarReservaVuelo(crearMailer, crearTemporizador, facturaCancelada)
    main.execute()
} catch (error) {
    console.log(error.message)
}
