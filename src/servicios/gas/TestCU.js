const {cancelarReservaVuelo} = require('../gas/CasoUsoCancelacion')
const { crearMailer } = require('../leo/mailer/mailer')
const { crearTemporizador } = require('../gas/Temporizador')
const {facturaCancelada} = require('../mati/test/appFacturaCancelacionVuelo')
const { crearDaoCliente } = require('../daos/daoPasajeros')
const { crearDaoReservas } = require('../daos/daoReservas')
const { crearDaoVuelo } = require('../daos/daoVuelo')


const main = cancelarReservaVuelo(crearMailer,crearTemporizador,facturaCancelada)
main.execute()