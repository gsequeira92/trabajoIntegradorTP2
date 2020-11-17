const {crearFactoryMailer} = require ('./factoryMailer.js')
const {crearBoleteriaAvion} = require ('../servicios/leo/moduloVenta/CU_ventaBoleto.js')
const {crearGestorNotificaciones} = require('../servicios/gas/GestorNotificaciones.js')
const {modificarComidaDeVuelo} = require('src/servicios/mati/historiaUsuario/historiaUsuario.js')
const { factoryFacturaCancelada } = require('../factorys/factoryPdfs')
const { factoryBilleteVuelo } = require('../factorys/factoryPdfs')


const mailer = crearFactoryMailer()
const notificador = crearGestorNotificaciones()

 //importar daos aca 
const dbPasajero = daoPasajero
const dbReserva = daoReserva
const dbVuelo = daoVuelo

function factoryCU(){
    
    return{
        getCU_Venta : () =>{
            const boleteria = crearBoleteriaAvion({dbPasajero,dbReserva,dbVuelo,mailer,notificador})
            return boleteria
        },
        getCU_Cancelacion: () =>{

            return crearCUCancelacionReserva({mailer, dbReserva, factoryFacturaCancelada, gestorDeNotificaciones})
        },
        getCU_ModificacionComida: () =>{

            return modificarComidaDeVuelo({dbReserva, factoryBilleteVuelo, mailer})
        }
       

    }

}

 module.exports = { factoryCU }