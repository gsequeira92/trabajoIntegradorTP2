/*Modificación de reserva en boleto de avión existente(Mati) 
LA MODIFICACION SERA PARA CAMBIAR LA COMIDA A SIN TACC
-Validar que exista reserva 
-Cambiar el tipo de comida
-Generar PDF con nuevo boleto
-Enviar por mail
*/

function modificarComidaDeVuelo({ daoReservas }) {

    return {
        //Recibo el id para identificar de manera unica la reserva, y el boolean para ver si la comida es Sin Tacc
        execute: async (idReserva, boolean) => {
            let reserva = null
            //const reserva = await daoReservas.getById(idReserva)
            if (await daoReservas.existeReserva(idReserva)) {
                reserva = await daoReservas.getReservaById(idReserva)
            }
            //verdadero es SIN TACC, falso es CON TACC
            if (!reserva) {
                await daoReservas.modificarComida(boolean) //no es necesario cancelarlo, se modifica directamente
                await generarPdfBillete(pasajero.apellido, rutaArchivo, boleto)
                await mandarBoletoXMail(boleto, rutaArchivo)
            }else{
                console.log('Reserva no encontrada')
            }

        }
    }
}

module.exports = { modificarComidaDeVuelo }