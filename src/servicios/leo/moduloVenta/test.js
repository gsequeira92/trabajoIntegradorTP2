const mailer = import ('../mailer/mailer.js')
const dao = import ('../moduloVenta/daoVenta.js')
const boleteria = import('./boleteria.js')

const clienteNuevo = {
    nombre: 'Ada',
    apellido: 'Lovelace',
    edad: '36',
    dni: '123',
    mail :"tu.ombligo@hotmail.com"
}
const vuelo = {
    destino: 'Buenos Aires',
    origen: 'Peru',
    asientos_totales: '12', // esto puede ser un length del asientos vendidos + disponibles ?
    asientos_vendidos: ['10A','11B'],
    asientos_disponibles: ['47G','65F'],
    vuelo_id: '28'
}


 boleteria = crearBoleteriaAvion(dao)
 boleteria = venderBoleto(clienteNuevo,)


boleteria.venderBoleto('28')