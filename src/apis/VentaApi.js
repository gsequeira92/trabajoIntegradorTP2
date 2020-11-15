//import : preguntar marian
const { factoryCU } = require ('../../../factorys/factoryCU.js')

<<<<<<< HEAD:src/servicios/leo/api/VentaApi.js
function crearVentaApi(){

    const CU_Venta = factoryCU().getCU_Venta() 
=======
function crearVentaApi({crearBoleteriaAvion}){
>>>>>>> 801938446553b413901796abad676300494d2b20:src/apis/VentaApi.js

    return{
        venderPasaje: ({idPasajero, idVuelo}) =>{
            return  CU_Venta.venderBoleto({idPasajero, idVuelo})
           
        }
        
    }

}

module.exports = {
    crearVentaApi
}
