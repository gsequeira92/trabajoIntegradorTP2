const {crearFactoryMailer} = require ('./factoryMailer.js')
const {crearBoleteriaAvion} = require ('../servicios/leo/moduloVenta/CU_ventaBoleto.js')
const {crearGestorNotificaciones} = require('../servicios/gas/GestorNotificaciones.js')
const {modificarComidaDeVuelo} = require('src/servicios/mati/historiaUsuario/historiaUsuario.js')
const { factoryFacturaCancelada } = require('../factorys/factoryPdfs')
const { factoryBilleteVuelo } = require('../factorys/factoryPdfs')
const dbPasajero = require ('../Db/PasajeroDb.js')
const dbReserva = require ('../Db/ReservaDb.js')
const dbVuelo = require ('../Db/Vuelo.Db.js')

const mailer = crearFactoryMailer()
const notificador = crearGestorNotificaciones()

function factoryCU(){
    
    return{
        getCU_Venta : () =>{
            const boleteria = crearBoleteriaAvion({dbPasajero,dbReserva,dbVuelo,mailer,notificador})
            return boleteria
        },
        // getCU_Cancelacion: () =>{

        //     return crearCUCancelacionReserva({mailer, dbReserva, factoryFacturaCancelada, gestorDeNotificaciones})
        // },
        getCU_ModificacionComida: () =>{

            return modificarComidaDeVuelo({dbReserva,dbPasajero, factoryBilleteVuelo, mailer})
        }
       

    }

}

 module.exports = { factoryCU }