const {crearReserva} = require ('../../../estudiantes/modelos/Reserva.js')


function crearBoleteriaAvion({daoPasajero,daoReserva,daoVuelo,mailer,notificador}) {
    
    return  {

        venderBoleto: async ({idVuelo,idpasajero}) => {
           
            /*if (await !pasajeroApi.existePasajero(datosVenta.pasajero)) {
               // asumo que esto ya existe await pasajeroApi.agregarCliente(datosVenta.pasajero)
            }*/

            const pasajero = await daoPasajero.getPasajeroById(idpasajero)

            const vuelo = await dapVuelo.getVueloById(idVuelo)

            const asiento = await daoVuelo.getAsientoDisponible(datosVenta.idVuelo)
              // lo hace mongo
            const boleto = crearReserva(pasajero, vuelo, asiento)

            daoReserva.guardarReserva(boleto)
                  //
            const rutaArchivo = pdf.factura(pasajero.apellido, rutaArchivo, boleto)

            const sobre = mailer.construirSobre(boleto, rutaArchivo)

            mailer.sendMail(sobre)

            notificador.crearNotificacionVuelo(boleto)

            return boleto
        }

    }

}
module.exports = {
    crearBoleteriaAvion
}