const factoryCU  = require ('../../../factorys/factoryCU.js')
const cuAlertasFactory = require('../factorys/CuProgramarAlertasFactory')
const CuFactoryCancelacion = require('../factorys/CuCancelacionFactory')
const CuModificacionComida = require('../factorys/CuModificacionComida')

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
        notificarSuscriptosAlertas: () =>{
            //aca ya le puedo dar valor a los parametros? 
            //va en la api? 
            return CU_ActivarAlertasProgramadas.execute(nombreEventoTemporizado, intervalo)
        }
        
    }

}

module.exports = {
    crearAerolineaApi
}
