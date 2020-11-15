//import : preguntar marian
const { factoryCU } = require ('../../../factorys/factoryCU.js')
const {CuFactory} = require('../factorys/CuCancelacionFactory')

function crearAerolineaApi(){

    const CU_Venta = factoryCU().getCU_Venta() 
    const CU_Cancelacion = factoryCU().getCU_Cancelacion()

    return{
        venderPasaje: ({idPasajero, idVuelo}) =>{
            return  CU_Venta.venderBoleto({idPasajero, idVuelo})
           
        },
        cancelarReserva: (idReserva) =>{
            return CU_Cancelacion.execute(idReserva)
        },
        
    }

}

module.exports = {
    crearVentaApi
}
