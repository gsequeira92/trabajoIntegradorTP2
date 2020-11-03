console.log('historia usuario')
/*Modificación de reserva en boleto de avión existente(Mati)
-Validar que exista reserva 
-Validar que exista cliente
-Validar que exista vuelo 
-Generar PDF con nuevo boleto
-Enviar por mail
-Cambiar alerta temporizada a la nueva fecha*/

const {crearMailer} = require('../leo/mailer/mailer') 
const {crearTemporizador} = require('../gas/Temporizador')
const {crearDaoCliente} = require('../daos/daoPasajeros')
const {crearDaoReservas} = require('../daos/daoReservas')
const {crearDaoVuelo} = require('../daos/daoVuelo')
const { billeteVuelo } = require("./appBilleteVuelo");

function modificarReservaVuelo() {

    const tempo = crearTemporizador()
    const mailer = crearMailer()

    return {
        execute: async (idCliente, idVuelo, idReserva) => {

            esClienteValido(idCliente)
            esVueloValido(idVuelo)
            esReservaValida(idReserva)

            const registroModificacion = modificarReserva(idReserva)
            await daoReservas.cancelar(idReserva)

            
            const idNotificacion = tempo.crearNotificacionVuelo(idReserva)
            tempo.cancelarEventoRecurrente(idNotificacion)
            billeteVuelo(nombreArchivo, rutaArchivo, objeto) 
            await mailer.enviarMail(idCliente)
        }


    }
}

async function  esClienteValido(idCliente){

}

async function esVueloValido(idVuelo){
    
}

async function esReservaValida(idVuelo){
    
}

module.exports = {modificarReservaVuelo}