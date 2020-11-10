const { crearTemporizador } = require('../gas/Temporizador')
const { getMailer } = require('../factorys/factoryMailer.js')
const { facturaCancelada } = require('../mati/test/appFacturaCancelacionVuelo')
const { crearDaoCliente } = require('../daos/daoPasajeros')
const  crearDaoReservas = require('../daos/daoReservas')
const rutaArchivo = '../mati/pdfs'




function crearCUCancelacionReserva({ ReservasApi}) {

    return {
        execute: async (idCliente, idReserva) => {

            const cliente = await ReservasApi.getByDniPasajero(idCliente)

            if (cliente) {
                const reserva = await ReservasApi.getReservaById(idReserva)
                //const mailPasajero = reserva.mail

                //Api borra reserva de DB
                await ReservasApi.deleteById(idReserva)

                //genera PDF con confirmacion de cancelacion
                pdfCancelacion(`${"cancelacion de reserva" + idReserva}`, rutaArchivo, reserva)

                //hay que agregar el pfd como adjunto al sobre del mailer


                //mailer deberia incluir el sobre para configurarlos de alguna forma y solo usar sendMail()
                mailer.sendMail(sobre)
                tempo.cancelarEventoRecurrente(idReserva)
            }
        }
    }
}

module.exports = { crearCUCancelacionReserva }