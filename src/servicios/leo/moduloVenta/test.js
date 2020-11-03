const mailer = require('../mailer/mailer.js')
const dao = require('../moduloVenta/daoVenta.js')
const boleteria = require('./boleteria.js')
const pdfFactura = require('./appFacturaVuelo');
const notificador = require('../../gas/Temporizador.js')


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



try {
    boleteria = crearBoleteriaAvion(dao, mailer, pdfFactura, notificador)
    boleteria.venderBoleto(clienteNuevo, vueki.vuelo_id)
} catch (e) {
    console.log(e.message)
}



