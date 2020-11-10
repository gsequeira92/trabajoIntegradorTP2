// master es el objeto global de parametros
function crearBoleteriaAvion(master) {

    

    return {

        venderBoleto: async (datosVenta) => {

            if (await !master.pasajeroApi.existeCliente(datosVenta.pasajero)) {
                await master.pasajeroApi.agregarCliente(datosVenta.pasajero)
            }

            const vuelo = await master.vueloApi.getVueloById(datosVenta.idVuelo)
            const asiento = await master.vueloApi.getAsientoDisponible(datosVenta.idVuelo)
            // abstraer la creacion del 
            const boleto = await master.reservaApi.crearBoleto(datosVenta.pasajero, vuelo, asiento)

            // esto lo saco poruque en el crearBoleto de arriba en la creacion ya se guarda en la db
            // await master.reservaApi.guardarVenta(boleto)

            //  crear el pdf 
            pdf.factura(pasajero.apellido, rutaArchivo, boleto)

            // mandar pdf por mail
            mandarBoletoXMail(boleto, rutaArchivo)

            // suscribir a la alerta
            notificador.crearNotificacionVuelo(boleto)
        }

    }



    function mandarBoletoXMail(boleto, pdf) {
        const sobre = {}
        sobre.mail = boleto.mail
        sobre.adjunto = pdf
        sobre.mensaje = "¡Buen viaje!"
        sobre.titulo = " El boleto de tu próximo viaje"
        sobre.from = "exampletaller@outlook.com"

        master.mailer.sendMail(sobre)
    }
    //esto lo haria el modelo






    async function reservarAsiento(vuelo) {
        // sacar un elemento del array de disponibles y ponerlo en el array de vendidos 
        // 


    }
    async function guardarVenta(boleto) {
        await db.addVenta(boleto);
    }




    function stringValido(msg) {
        let stringValido = false
        if (msg != "") {
            stringValido = true
        }
        return stringValido
    }


}


module.exports = {
    crearBoleteriaAvion
}