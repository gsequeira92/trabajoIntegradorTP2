
function crearBoleteriaAvion(daoVentas, mailer,pdf, notificador) {
    const db = daoVentas;
    const rutaArchivo = '../../mati/pdfs'
    
    return {

        venderBoleto: async (pasajero, idVuelo) => {

            // validar parametros

            if (!existeElVuelo(idVuelo)) {
                throw new Error('La operacion no se puede realizar : vuelo inexistente')
            }
            if (!pasajeroValido(pasajero)) {
                throw new Error('La operacion no se puede realizar : datos del pasajero incorrectos')
            }
            if (!existeCliente(pasajero)) {
                agregarCliente(pasajero)
            }


            const vuelo = await db.getVueloById(idVuelo) // si recibo el vuelo por parametro esto resulta precindible 
            
            const asiento = await reservarAsiento(idVuelo)
        
            const boleto = crearBoleto(pasajero, vuelo, asiento)

            //guardar el boleto el la db
            await db.guardarVenta(boleto)

            //  crear el pdf 
            pdf.factura(pasajero.apellido,rutaArchivo , boleto)

            // mandar pdf por mail
            mandarBoletoXMail(boleto, rutaArchivo)
            
            // suscribir a la alerta
            notificador.crearNotificacionVuelo(boleto)
        }

    }


    // tengo que async si la db esta harcodeada ? 
    async function existeElVuelo(vuelo) {
        const v = await db.getVueloById(vuelo.vuelo_id)
        const existe = false
        if (v !== null) { // si el vuelo no existe la db devuelve null,no?
            existe = true
        }
        return existe
    }


    function pasajeroValido(pasajero) {  // esta bien esto? 
        const valido = true
        if (!stringValido(pasajero.nombre)) {
           throw new Error('Nombre del pasajero vacio')
        }
        if (!stringValido(pasajero.apellido)) {
            throw new Error('Apellido del pasajero vacio')
        }
        if (pasajero.edad < '0' || pasajero.edad > '115') {
            throw new Error('Edad del pasajero incorrecta')
        }
        if (!stringValido(pasajero.dni)) {
            throw new Error('Dni del pasajero vacio')
        }
        if (!esCorreoElectronico(pasajero.mail)) {
            throw new Error('Email del pasajero incorrecto')
        }

        return valido
    }

    async function existeCliente(pasajero) {
        const v = await db.getClienteById(vuelo.vuelo_id)
        const existe = false
        if (v !== null) {
            existe = true
        }
        return existe
    }

    async function agregarCliente(pasajero) {
        await db.addCliente(pasajero)
        // esta bien encapsular asi esta llamada a la bd?

    }
    function crearBoleto(pasajero, vuelo) {
        const boleto = {}
        boleto.id = "009"
        boleto.cliente = pasajero.dni
        boleto.vuelo = vuelo.vuelo_id
        boleto.asiento


        return boleto
    }
    async function reservarAsiento(vuelo) {
        // sacar un elemento del array de disponibles y ponerlo en el array de vendidos 
        // 


    }
    async function guardarVenta(boleto) {
        await db.addVenta(boleto);
    }

    function mandarBoletoXMail(boleto, pdf) {
        const sobre = {}
        sobre.mail = boleto.mail
        sobre.adjunto = pdf
        sobre.mensaje = "¡Buen viaje!"
        sobre.titulo = " El boleto de tu próximo viaje"
        sobre.from = "exampletaller@outlook.com"

        mailer.sendMail(sobre)
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