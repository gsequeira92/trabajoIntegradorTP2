/*Modificación de reserva en boleto de avión existente(Mati) 
LA MODIFICACION SERA PARA CAMBIAR LA COMIDA A SIN TACC
-Validar que exista reserva 
-Cambiar el tipo de comida
-Generar PDF con nuevo boleto
-Enviar por mail
*/

function modificarComidaDeVuelo(ReservasApi, generarPdfBillete, mandarBoletoXMail) {//generarPdfBillete,mandarBoletoXMail

    return {
        //Recibo el id para identificar de manera unica la reserva, y el boolean para ver si la comida es Sin Tacc
        cambioDeComida: async (idReserva, boolean) => {
           try{
            reserva = await ReservasApi.getById(idReserva) //lanzar excepcion si no lo encuentra, que no devuelva null
            //verdadero es SIN TACC, falso es CON TACC
            await ReservasApi.modificarComida(reserva, boolean) //no es necesario cancelarlo, se modifica directamente la misma reserva
            await generarPdfBillete(pasajero.apellido, rutaArchivo, objeto)//recibir como dependecia, puede ser un caso de uso
            await mandarBoletoXMail(boleto, rutaArchivo)//recibir como dependecia , puede ser un caso de uso
            }catch(err){
                console.log(e)
            }
        }
    }
}

module.exports = { modificarComidaDeVuelo }