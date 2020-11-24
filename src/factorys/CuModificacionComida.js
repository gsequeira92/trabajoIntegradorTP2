const {crearFactoryMailer} = require ('./factoryMailer.js')
const {modificarComidaDeVuelo} = require('src/servicios/mati/historiaUsuario/historiaUsuario.js')
const { factoryBilleteVuelo } = require('../factorys/factoryBilleteVuelo')
const dbPasajero = require ('../Db/PasajeroDb.js')
const dbReserva = require ('../Db/ReservaDb.js')


const mailer = crearFactoryMailer()

function factoryModificacionComida(){
    
    return{
        
        getCU_ModificacionComida: () =>{

            return modificarComidaDeVuelo({dbReserva,dbPasajero, factoryBilleteVuelo, mailer})
        }
       

    }

}

 module.exports = { factoryModificacionComida }