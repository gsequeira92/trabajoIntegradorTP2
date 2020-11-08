const { crearMailer } = require('../leo/mailer/mailer')
const { crearTemporizador } = require('../gas/Temporizador')
const { facturaCancelada } = require('../mati/test/appFacturaCancelacionVuelo')
const { crearDaoCliente } = require('../daos/daoPasajeros')
const { crearDaoReservas } = require('../daos/daoReservas')
const rutaArchivo = '../mati/pdfs'

const credencial = {}
credencial.user = "exampletaller@outlook.com"
credencial.pass = "leo12345"
credencial.servicio = "outlook"

const tempo = crearTemporizador()
const mailer = crearMailer(credencial)
const daoReservas = crearDaoReservas()
//factory
//dao por parametros o directo en la funcion?????
function crearCUCancelacionReserva(mailer, tempo, facturaCancelada,daoReservas) {

    return {
        execute: async (idCliente, idReserva) => {

            if (esClienteValido(idCliente)) {

                //Probablemente no haga falta
                esReservaValida(idReserva)
                const reserva = await obtenerReservaPorId(idReserva)
                const mailPasajero = reserva.mail

                //funcion que borra reserva de DB
                cancelarReserva(idReserva, daoReservas)

                //genera PDF con confirmacion de cancelacion
                facturaCancelada(`${"cancelacion de reserva" + idReserva}`, rutaArchivo, reserva)

                //mailer envia mail
                await mailer.enviarMail(mailPasajero, rutaArchivo)
                tempo.cancelarEventoRecurrente(idReserva)

            }

        }
    }
}

async function obtenerReservaPorId(idReserva, daoReservas) {
    //validar o lanzar excepcion
    return await daoReservas.getById(idReserva)
}

async function cancelarReserva(idReserva, daoReservas) {
    await daoReservas.delete(idReserva)
}

async function esClienteValido(idCliente) {

    //query en base de datos para comprobar si existe cliente con ese id
    //Devuelve boolean
}

async function esReservaValida(idVuelo) {

    //query en base de datos para comprobar si existe reserva con ese id (y esta activa)
    //Devuelve boolean
}

module.exports = { crearCUCancelacionReserva }