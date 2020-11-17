/*Modificación de reserva en boleto de avión existente(Mati) 
LA MODIFICACION SERA PARA CAMBIAR LA COMIDA A SIN TACC
-Validar que exista reserva 
-Cambiar el tipo de comida
-Generar PDF con nuevo boleto
-Enviar por mail
*/

function modificarComidaDeVuelo({dbReserva, factoryBilleteVuelo, mailer}) {//generarPdfBillete,mandarBoletoXMail

    return {
        //Recibo el id para identificar de manera unica la reserva, y el boolean para ver si la comida es Sin Tacc
        cambioDeComida: async (idReserva, boolean) => {
            //verdadero es SIN TACC, falso es CON TACC
            await dbReserva.updateValorComida(idReserva, boolean) 
            //pedir reserva para mandarla como objeto al generador de pdf?
            factoryBilleteVuelo(pasajero.apellido, rutaArchivo, objeto)
            const sobre = mailer.getSobre(boleto)//como mando el pdf? tengo que retornarlo en la linea de arriba?
            mailer.sendMail(sobre)
        }
    }
}

module.exports = { modificarComidaDeVuelo }