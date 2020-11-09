console.log('historia usuario')
/*Modificación de reserva en boleto de avión existente(Mati) ESPECIFICAR QUE TIPO sugerencia "modficar un campo tipo boolean"
-Validar que exista reserva 
-Validar que exista cliente
-Validar que exista vuelo 
-Generar PDF con nuevo boleto
-Enviar por mail
-Cambiar alerta temporizada a la nueva fecha*/

//ver la diferencia entre vuelo y reserva, confunde

const {crearMailer} = require('../leo/mailer/mailer') 
const {crearDaoCliente} = require('../daos/daoPasajeros')
const {crearDaoReservas} = require('../daos/daoReservas')
const {crearDaoVuelo} = require('../daos/daoVuelo')
const { billeteVuelo } = require("./appBilleteVuelo");//deshacerse de esto

function modificarComidaDeVuelo() {

    const tempo = crearTemporizador()
    const mailer = crearMailer()

    return {
        execute: async (idReserva,boolean) => {

            esClienteValido(idCliente) //pedirsela al DAO correspondiente
            esVueloValido(idVuelo) //pedirsela al DAO correspondiente
            esReservaValida(idReserva) //pedirsela al DAO correspondiente

            const registroModificacion = modificarReserva(idReserva)
            await daoReservas.modificarComida(idReserva) //no es necesario cancelarlo, se modifica directamente
            const reserva = metodoBuscaReservaById(idReserva)

            billeteVuelo(nombreArchivo, rutaArchivo, objeto) 
            await mailer.enviarMail(idCliente)
        }


    }
}

module.exports = {modificarComidaDeVuelo}