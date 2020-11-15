/*Modificación de reserva en boleto de avión existente(Mati) 
LA MODIFICACION SERA PARA CAMBIAR LA COMIDA A SIN TACC
-Validar que exista reserva 
-Cambiar el tipo de comida
-Generar PDF con nuevo boleto
-Enviar por mail
*/

function modificarComidaDeVuelo({reservaDb, factoryBilleteVuelo, mailer}) {//generarPdfBillete,mandarBoletoXMail

    return {
        //Recibo el id para identificar de manera unica la reserva, y el boolean para ver si la comida es Sin Tacc
        cambioDeComida: async (idReserva, boolean) => {
            //verdadero es SIN TACC, falso es CON TACC
            await reservaDb.updateValorComida(idReserva, boolean) //no es necesario cancelarlo, se modifica directamente la misma reserva
            factoryBilleteVuelo(pasajero.apellido, rutaArchivo, objeto)//recibir como dependecia, puede ser un caso de uso
            const sobre = mailer.getSobre(boleto)
            mailer.sendMail(sobre)
        }
    }
}

module.exports = { modificarComidaDeVuelo }