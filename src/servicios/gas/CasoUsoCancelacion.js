const { crearTemporizador } = require('../gas/Temporizador')
const { getMailer } = require('../factorys/factoryMailer.js')
const { factoryFacturaCancelada } = require('../factorys/factoryPdfs.js')
import fs from 'fs'
const rutaArchivo = '../mati/pdfs'




function crearCUCancelacionReserva({ ReservasApi}) {

    const mailer = getMailer()
    const pdfCancelacion = factoryFacturaCancelada()

    return {
        execute: async (idCliente, idReserva) => {

            const cliente = await ReservasApi.getByDniPasajero(idCliente)

            if (cliente) {
                const reserva = await ReservasApi.getReservaById(idReserva)
                //const mailPasajero = reserva.mail

                //Api borra reserva de DB
                await ReservasApi.deleteById(idReserva)

                //genera PDF con confirmacion de cancelacion
                pdfCancelacion.factoryFacturaCancelada( `${"cancelacion de reserva" + idReserva}`,rutaArchivo)

                //hay que agregar el pfd como adjunto al sobre del mailer
                let pdfAdjunto = new Blob(fs.readFile(rutaArchivo,'uft8'), {type:'appication/pdf'})

                //agregar el pdfAdjunto al sobre e ir construyendolo
                const sobre = mailer.getSobre()
                sobre.from()
                sobre.to()
                sobre.title()
                sobre.text()
                sobre.addAttachments.push(pdfAdjunto)

                //mailer deberia incluir el sobre para configurarlos de alguna forma y solo usar sendMail()
                mailer.sendMail(sobre)
                tempo.cancelarEventoRecurrente(idReserva)
            }
        }
    }
}

module.exports = { crearCUCancelacionReserva }