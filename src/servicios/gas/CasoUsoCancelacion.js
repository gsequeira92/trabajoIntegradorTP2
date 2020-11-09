const { crearTemporizador } = require('../gas/Temporizador')
const { getMailer } = require('../factorys/factoryMailer.js')
const { facturaCancelada } = require('../mati/test/appFacturaCancelacionVuelo')
const { crearDaoCliente } = require('../daos/daoPasajeros')
const { crearDaoReservas } = require('../daos/daoReservas')
const rutaArchivo = '../mati/pdfs'


function crearCUCancelacionReserva({ mailer, tempo, facturaCancelada, daoReservas, daoClientes }) {

    mailer = getMailer()
    tempo = crearTemporizador()
    pdfCancelacion = facturaCancelada()
    daoReservas = crearDaoReservas()
    daoClientes = crearDaoCliente()

    return {
        execute: async (idCliente, idReserva) => {

            const cliente = await daoClientes.getById(idCliente)

            if (cliente) {
                const reserva = await daoReservas.getReservaById(idReserva)
                const mailPasajero = reserva.mail

                //funcion que borra reserva de DB
                await daoReservas.delete(idReserva)

                //genera PDF con confirmacion de cancelacion
                pdfCancelacion(`${"cancelacion de reserva" + idReserva}`, rutaArchivo, reserva)

                //hay que agregar el pfd como adjunto al sobre del mailer
                
                 
                //mailer deberia incluir el sobre para configurarlos de alguna forma y solo usar sendMail()
                await mailer.sendMail(sobre)
                tempo.cancelarEventoRecurrente(idReserva)

            }

        }
    }
}

module.exports = { crearCUCancelacionReserva }