const {crearReserva} = require ('../../../estudiantes/modelos/Reserva.js')



function crearBoleteriaAvion({daoPasajero,daoReserva,daoVuelo,mailer,notificador,generadorPDF}) {
    
    return  {

        venderBoleto: async ({idVuelo,idpasajero}) => {
           

            const pasajero = await daoPasajero.getPasajeroById(idpasajero)

            const vuelo = await daoVuelo.getVueloById(idVuelo)

            const asiento = vuelo.getAsientoDisponible()
          
            const boleto = crearReserva({pasajero, vuelo, asiento})

            await daoReserva.guardarReserva(boleto)
                
            const rutaArchivo = generadorPDF.getBoletoPDF({pasajero, rutaArchivo, boleto})

            const sobre = mailer.getSobreVenta({pasajero, rutaArchivo})

            await mailer.sendMail(sobre)

            await notificador.crearNotificacionVuelo(boleto)

            return boleto
        }

    }

}
module.exports = {
    crearBoleteriaAvion
}




    /*if (await !pasajeroApi.existePasajero(datosVenta.pasajero)) {
               // asumo que esto ya existe await pasajeroApi.agregarCliente(datosVenta.pasajero)
            }*/