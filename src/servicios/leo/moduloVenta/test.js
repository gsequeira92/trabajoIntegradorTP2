
const {factoryMailer} = require ('../../../factorys/factoryMailer.js')
const { crearBoleteriaAvion } = require('./boleteria.js')


/*
const clienteNuevo = {
    nombre: 'Ada',
    apellido: 'Lovelace',
    edad: '36',
    dni: '456',
    mail: "tu.ombligo@hotmail.com"
}
const vuelo = {
    destino: 'Buenos Aires',
    origen: 'Peru',
    asientos_totales: '12', // esto puede ser un length del asientos vendidos + disponibles ?
    asientos_vendidos: ['10A', '11B'],
    asientos_disponibles: ['47G', '65F'],
    vuelo_id: '28'
}
*/

// CREAR MASTER UTILIZANDO EL FACTORY -> dao pasajero/vuelo/boleto, mailer, pdfFactura, notificador
master {
   pasajeroApi
   pasajeroApi
   pasajeroApi
   mailer =

}


try {
    const boleteria = crearBoleteriaAvion()
    const datos = {
        cliente : 
        vuelo
    }
    await boleteria.venderBoleto(clienteNuevo, vuelo.vuelo_id)
} catch (e) {
    console.log(e.message) // esto esta bien?
}



