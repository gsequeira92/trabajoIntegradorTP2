//import : preguntar marian
const { factoryCU } = require ('../../../factorys/factoryCU.js')

function crearAerolineaApi(){

    const CU_Venta = factoryCU.getCU_Venta() 
    const CU_Cancelacion = factoryCU.getCU_Cancelacion()
    const CU_ModificacionComida = factoryCU.getCU_ModificacionComida()

    return{
        venderPasaje: ({idPasajero, idVuelo}) =>{
            return  CU_Venta.venderBoleto({idPasajero, idVuelo})
           
        },
        cancelarReserva: (idReserva) =>{
            return CU_Cancelacion.execute(idReserva)
        },
        modificarComida: (idReserva, comidaSinTacc) =>{
            return CU_ModificacionComida.cambioDeComida(idReserva, comidaSinTacc)
        },
        
    }

}

module.exports = {
    crearAerolineaApi
}
