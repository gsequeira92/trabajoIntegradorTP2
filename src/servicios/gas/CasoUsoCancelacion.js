const {crearMailer} = require('../leo/mailer/mailer') 
const {crearTemporizador} = require('../gas/Temporizador')
const {crearDaoCliente} = require('../daos/daoPasajeros')
const {crearDaoReservas} = require('../daos/daoReservas')
const {crearDaoVuelo} = require('../daos/daoVuelo')

const credencial ={}
credencial.user = "exampletaller@outlook.com"
credencial.pass = "leo12345"
credencial.servicio ="outlook"


function cancelarReservaVuelo(dependencias) {

    const tempo = crearTemporizador()
    //mailer recibe credencial por parametro
    const mailer = crearMailer(credencial)

    return {
        execute: async (idCliente, idVuelo, idReserva) => {

            esClienteValido(idCliente)
            esVueloValido(idVuelo)
            esReservaValida(idReserva)
            const registroCancelacion = cancelarReserva(idReserva)
            await daoReservas.delete(idReserva)
            contentGen.generar(path,param1,param2)
            await mailer.enviarMail()
            tempo.cancelarEventoRecurrente(idReserva)
        }
    }
}

async function esClienteValido(idCliente){

    //query en base de datos para comprobar si existe cliente con ese id
    //Devuelve boolean
}

async function esVueloValido(idVuelo){

    //query en base de datos para comprobar si existe vuelo con ese id
    //Devuelve boolean
    
}

async function esReservaValida(idVuelo){

    //query en base de datos para comprobar si existe reserva con ese id (y esta activa)
    //Devuelve boolean
}

module.exports = {cancelarReservaVuelo}