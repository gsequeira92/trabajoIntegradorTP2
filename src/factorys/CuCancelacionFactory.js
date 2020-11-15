const crearCUCancelacionReserva = require('../servicios/gas/CasoUsoCancelacion')
const factoryMailer = require('../factorys/factoryMailer')
const { factoryFacturaCancelada } = require('../factorys/factoryPdfs')
const ReservasDb = require('../Db/ReservaDb')
const gestorNotificaciones = require('../servicios/gas/GestorNotificaciones')

const mailer = factoryMailer.getMailer()
const reservas = ReservasDb.crearReservasDaoDb()
const pdfCancelacion = factoryFacturaCancelada()
const gestorDeNotificaciones = gestorNotificaciones.crearGestorNotificacionescrearGestorNotificaciones()
//creamos caso de uso que va a devolver la factory de CU
const CuCancelacion = crearCUCancelacionReserva(mailer, reservas, pdfCancelacion, gestorDeNotificaciones)

const CuFactory = {

    return: {

        getCuCancelacion: () => {

            return CuCancelacion
        }

    }
}

module.exports={CuFactory}