
const { factoryMailer } = require('../../../factorys/factoryMailer.js')
const { factoryBilleteVuelo } = require('../../../factorys/factoryPdfs.js')
const { crearBoleteriaAvion } = require('./boleteria.js')
const { crearPasajerosApi } = require('../../../estudiantes/aplicacion/PasajerosApi')
const { crearVueloApi } = require('../../../estudiantes/aplicacion/VuelosApi')
const { crearReservaApi } = require('../../../estudiantes/aplicacion/ReservasApi')
const { crearTemporizador } = require('../../gas/Temporizador.js')




const master = {}
master.pasajeroApi =  crearPasajerosApi(),
master.vueloApi =  crearVueloApi()
master.reservaApi = crearReservaApi(),
master.mailer = factoryMailer(),
master.pdf = factoryBilleteVuelo(),
master.notificador = crearTemporizador()



try {
    const boleteria = crearBoleteriaAvion(master)
     dtoVenta =  creardtoVenta( cliente.id, vuelo_id)
    await boleteria.venderBoleto(dtoVenta)
} catch (e) {
    console.log(e.message)
}


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


