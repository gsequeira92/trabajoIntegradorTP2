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
            //actualizo el valor de la reserva al que me pasan por parametro
            await dbReserva.updateValorComida(idReserva, boolean) 
            //obtengo la reserva y el pasajero
            const reserva = await dbReserva.getById(idReserva)
            const pasajero = await dbPasajero.getById(dbReserva.getDniPasajero(idReserva))
            //el nombre del archivo sera el apellido del pasajero
            factoryBilleteVuelo(pasajero.apellido, rutaArchivo, reserva)
            //envio mail con los datos nuevos
            const sobre = mailer.getSobre(`${rutaArchivo}`/`${pasajero.apellido}`)
            mailer.sendMail(sobre)
        }
    }
}

module.exports = { modificarComidaDeVuelo }