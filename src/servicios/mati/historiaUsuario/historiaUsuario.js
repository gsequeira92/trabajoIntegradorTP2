/*Modificación de reserva en boleto de avión existente(Mati) 
LA MODIFICACION SERA PARA CAMBIAR LA COMIDA A SIN TACC
-Validar que exista reserva 
-Cambiar el tipo de comida
-Generar PDF con nuevo boleto
-Enviar por mail
*/

function modificarComidaDeVuelo({ mailer, daoReservas, billeteVuelo }) {

    mailer = getMailer()
    billeteVuelo = billeteVuelo()
    daoReservas = crearDaoReservas()

    return {
        execute: async (idReserva, boolean) => {
            //Recibo el id para identificar de manera unica la reserva, y el boolean para ver si la comida es Sin Tacc
            //verdadero es SIN TACC, falso es CON TACC
            const reserva = await daoReservas.getById(idReserva)
            if (reserva) {
                await daoReservas.modificarComida(boolean) //no es necesario cancelarlo, se modifica directamente
                billeteVuelo(nombreArchivo, rutaArchivo, objeto)
                await mailer.enviarMail(idCliente)
            }
        }
    }
}

module.exports = { modificarComidaDeVuelo }