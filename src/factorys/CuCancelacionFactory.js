const {crearCUCancelacionReserva} = require('../servicios/gas/CasoUsoCancelacion')
const factoryMailer = require('../factorys/factoryMailer')
const { factoryFacturaCancelada } = require('../factorys/factoryPdfs')
const {crearReservasDaoDb} = require('../Db/ReservaDb')
const {crearGestorNotificaciones} = require('../servicios/gas/GestorNotificaciones')

const mailer = factoryMailer.getMailer()
const pdfCancelacion = factoryFacturaCancelada()
const gestorDeNotificaciones = crearGestorNotificaciones()

//Cliente a base- antes de iniciar Sv. Factory devuelve cliente ya conectado
//Lazy connection/loading en cliente. 
const reservas = crearReservasDaoDb()


//creamos caso de uso que va a devolver la factory de CU
const CuCancelacion = crearCUCancelacionReserva(mailer, reservas, pdfCancelacion, gestorDeNotificaciones)

const CuFactory = {

    return: {

        getCuCancelacion: () => {

            return CuCancelacion
        }

    }
}

module.exports= CuFactory