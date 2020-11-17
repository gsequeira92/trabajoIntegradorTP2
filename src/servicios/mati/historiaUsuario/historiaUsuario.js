/*Modificación de reserva en boleto de avión existente(Mati) 
LA MODIFICACION SERA PARA CAMBIAR LA COMIDA A SIN TACC
-Validar que exista reserva 
-Cambiar el tipo de comida
-Generar PDF con nuevo boleto
-Enviar por mail
*/

function modificarComidaDeVuelo({dbReserva, dbPasajero, factoryBilleteVuelo, mailer}) {//generarPdfBillete,mandarBoletoXMail

    return {
        //Recibo el id para identificar de manera unica la reserva, y el boolean para ver si la comida es Sin Tacc
        cambioDeComida: async (idReserva, boolean) => {
            //verdadero es SIN TACC, falso es CON TACC
            await dbReserva.updateValorComida(idReserva, boolean) 
            const objeto = await dbReserva.getById(idReserva)
            const pasajero = await dbPasajero.getById(dbReserva.getDniPasajero(idReserva))
            factoryBilleteVuelo(pasajero.apellido, rutaArchivo, objeto)
            const sobre = mailer.getSobre(`${rutaArchivo}`/`${pasajero.apellido}`)
            mailer.sendMail(sobre)
        }
    }
}

module.exports = { modificarComidaDeVuelo }