/*Modificación de reserva en boleto de avión existente(Mati) 
LA MODIFICACION SERA PARA CAMBIAR LA COMIDA A SIN TACC
-Validar que exista reserva 
-Cambiar el tipo de comida
-Generar PDF con nuevo boleto
-Enviar por mail
*/

function modificarComidaDeVuelo(ReservasApi) {

    return {
        //Recibo el id para identificar de manera unica la reserva, y el boolean para ver si la comida es Sin Tacc
        cambioDeComida: async (idReserva, boolean) => {
            let reserva = null
            reserva = await ReservasApi.getById(idReserva)
            
            if (!reserva) {
                //verdadero es SIN TACC, falso es CON TACC
                await ReservasApi.modificarComida(reserva, boolean) //no es necesario cancelarlo, se modifica directamente la misma reserva
                await generarPdfBillete(pasajero.apellido, rutaArchivo, boleto)
                await mandarBoletoXMail(boleto, rutaArchivo)
            }else{
                console.log('Reserva no encontrada')
            }

        }
    }
}

module.exports = { modificarComidaDeVuelo }