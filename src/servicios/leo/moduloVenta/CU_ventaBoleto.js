const {crearReserva} = require ('../../../estudiantes/modelos/Reserva.js')



function crearBoleteriaAvion({daoPasajero,daoReserva,daoVuelo,mailer,notificador}) {
    
    return  {

        venderBoleto: async ({idVuelo,idpasajero}) => {
           

            const pasajero = await daoPasajero.getPasajeroById(idpasajero)

            const vuelo = await daoVuelo.getVueloById(idVuelo)

            const asiento = vuelo.getAsientoDisponible()
          
            const boleto = crearReserva({pasajero, vuelo, asiento})

            await daoReserva.guardarReserva(boleto)
                // factura : mejorar nombre
            const rutaArchivo = pdf.factura(pasajero.apellido, rutaArchivo, boleto)

            const sobre = mailer.construirSobre(boleto,pasajero, rutaArchivo)

            mailer.sendMail(sobre)

            notificador.crearNotificacionVuelo(boleto)

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