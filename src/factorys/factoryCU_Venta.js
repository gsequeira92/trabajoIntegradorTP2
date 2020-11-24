const {crearFactoryMailer} = require ('./factoryMailer.js')
const {crearBoleteriaAvion} = require ('../servicios/leo/moduloVenta/CU_ventaBoleto.js')
const {crearGestorNotificaciones} = require('../servicios/gas/GestorNotificaciones.js')
const { factoryBilleteVuelo } = require('../factorys/factoryPdfs')


const mailer = crearFactoryMailer.getMailer()
const generadorPDF = factoryBilleteVuelo()
const notificador = crearGestorNotificaciones()

 function crearCUventa(){

return{
    getCU_Venta : async () =>{
        await factoryDAOs.crearDaoVuelo()
        await factoryDAOs.crearDaoReserva()
        await factoryDAOs.crearDaoPasajero()
        return  crearBoleteriaAvion({dbPasajero,dbReserva,dbVuelo,mailer,notificador,generadorPDF})
        
    }
}
}

module.exports = {crearCUventa}