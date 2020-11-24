const factoryCU  = require ('../../../factorys/factoryCU.js')
const cuAlertasFactory = require('../factorys/CuProgramarAlertasFactory')
const CuFactoryCancelacion = require('../factorys/CuCancelacionFactory')
const CuModificacionComida = require('../factorys/CuModificacionComida')

function crearAerolineaApi(){

    const CU_Venta = factoryCU.getCU_Venta() 

    //Importado por fuera del factoryCU
    const CU_Cancelacion = CuFactoryCancelacion.getCuCancelacion()

    //Importado por fuera del factoryCU
    const CU_ModificacionComida = CuModificacionComida.getCU_ModificacionComida()


    //Importado por fuera del factoryCU
    const CU_ActivarAlertasProgramadas = cuAlertasFactory.getCuProgramarAlertas()

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
            return CU_ActivarAlertasProgramadas.execute(nombreEventoTemporizado, intervalo)
        }
        
    }

}

module.exports = {
    crearAerolineaApi
}
