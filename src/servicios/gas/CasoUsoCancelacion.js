const {crearMailer} = require('../leo/mailer/mailer') 
const {crearTemporizador} = require('../gas/Temporizador')
const {crearDaoCliente} = require('../daos/daoPasajeros')
const {crearDaoReservas} = require('../daos/daoReservas')
const {crearDaoVuelo} = require('../daos/daoVuelo')

function cancelarReservaVuelo() {

    const tempo = crearTemporizador()
    //mailer recibe credencial por parametro
    const mailer = crearMailer()

    return {
        execute: async (idCliente, idVuelo, idReserva) => {

            esClienteValido(idCliente)
            esVueloValido(idVuelo)
            esReservaValida(idReserva)

            const registroCancelacion = cancelarReserva(idReserva)
            await daoReservas.cancelar(idReserva)

            const notificacionPDF = contentGen.generar('cancelacion')
            await mailer.enviarMail(idCliente)
            
            tempo.cancelarEventoRecurrente(idReserva)
        }


    }
}

async function  esClienteValido(idCliente){



}

async function esVueloValido(idVuelo){
    
}

async function esReservaValida(idVuelo){
    
}

module.exports = {cancelarReservaVuelo}