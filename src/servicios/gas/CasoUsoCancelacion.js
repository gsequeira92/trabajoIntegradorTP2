const { crearMailer } = require('../leo/mailer/mailer')
const { crearTemporizador } = require('../gas/Temporizador')
const { facturaCancelada } = require('../mati/test/appFacturaCancelacionVuelo')
const { crearDaoCliente } = require('../daos/daoPasajeros')
const { crearDaoReservas } = require('../daos/daoReservas')
const { crearDaoVuelo } = require('../daos/daoVuelo')

const credencial = {}
credencial.user = "exampletaller@outlook.com"
credencial.pass = "leo12345"
credencial.servicio = "outlook"

//crear capa de ruteo que use este caso de uso (Express)
//agregar interfaz/factory para abstraer capa de ruteo de capa de negocio


function cancelarReservaVuelo(crearMailer, crearTemporizador, facturaCancelada) {

    const tempo = crearTemporizador()
    //mailer recibe credencial por parametro
    const mailer = crearMailer(credencial)

    return {
        execute: async (idCliente, idVuelo, idReserva) => {

            if (!esClienteValido(idCliente)) {
                throw new Error('El id de este cliente es incorrecto')
            } else if (!esVueloValido(idVuelo)) {
                throw new Error('El id de vuelo es incorrecto')
            } else if (!esReservaValida(idReserva)) {
                throw new Error('El id de esta reserva es incorrecto')
            } else {
                cancelarReserva(idReserva, daoReservas)
                facturaCancelada(nombreArchivo, rutaArchivo, objeto)
                await mailer.enviarMail()
                tempo.cancelarEventoRecurrente(idReserva)
            }

        }
    }
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