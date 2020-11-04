const { crearMailer } = require('../leo/mailer/mailer')
const { crearTemporizador } = require('../gas/Temporizador')
const { facturaCancelada } = require('../mati/test/appFacturaCancelacionVuelo')
const { crearDaoCliente } = require('../daos/daoPasajeros')
const { crearDaoReservas } = require('../daos/daoReservas')
const { crearDaoVuelo } = require('../daos/daoVuelo')
const rutaArchivo = '../mati/pdfs'

const credencial = {}
credencial.user = "exampletaller@outlook.com"
credencial.pass = "leo12345"
credencial.servicio = "outlook"

//crear capa de ruteo que use este caso de uso (Express)
//agregar interfaz/factory para abstraer capa de ruteo de capa de negocio
//un dao para cada entidad/objeto

function cancelarReservaVuelo(crearMailer, crearTemporizador, facturaCancelada) {

    const tempo = crearTemporizador()
    const mailer = crearMailer(credencial)

    return {
        execute: async (idCliente, idVuelo, idReserva) => {

            esClienteValido(idCliente)
            esVueloValido(idVuelo)
            esReservaValida(idReserva)

            const reserva = await obtenerReservaPorId(idReserva)
            //funcion que borra reserva de DB
            cancelarReserva(idReserva, daoReservas)
            //genera PDF con confirmacion de cancelacion
            facturaCancelada(`${"cancelacion de reserva" + idReserva}`, rutaArchivo, reserva)

            const options = {
                from: sobre.from,
                to: sobre.mail,
                subject: sobre.titulo,
                text: sobre.mensaje,
                attachments: [
                    {
                        path: sobre.adjunto
                    }]

            }

            //mailer envia mail
            await mailer.enviarMail(options)
            tempo.cancelarEventoRecurrente(idReserva)

        }
    }
}

async function obtenerReservaPorId(idReserva, daoReservas) {
    return await daoReservas.getById(idReserva)
}

async function cancelarReserva(idReserva, daoReservas) {
    await daoReservas.delete(idReserva)
}

async function esClienteValido(idCliente) {

    //query en base de datos para comprobar si existe cliente con ese id
    //Devuelve boolean
}

async function esVueloValido(idVuelo) {

    //query en base de datos para comprobar si existe vuelo con ese id
    //Devuelve boolean

}

async function esReservaValida(idVuelo) {

    //query en base de datos para comprobar si existe reserva con ese id (y esta activa)
    //Devuelve boolean
}

module.exports = { cancelarReservaVuelo }