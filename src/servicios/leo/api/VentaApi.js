//import : preguntar marian
const { factoryCU } = require ('../../../factorys/factoryCU.js')

function crearVentaApi(){

    const CU_Venta = factoryCU().getCU_Venta() 

    return{
        venderPasaje: ({idPasajero, idVuelo}) =>{
            return  CU_Venta.venderBoleto({idPasajero, idVuelo})
           
        }
        
    }

}

module.exports {
    crearVentaApi
}