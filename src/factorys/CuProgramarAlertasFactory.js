const gestorNotificaciones = require('../servicios/gas/GestorNotificaciones')
const temporizador = require('../servicios/gas/Temporizador')
const daoNotificaciones = require('../Db/NotificacionDb')
const { crearCUProgramarNotificaciones } = require('../servicios/gas/CasoUsoNotificacion')

//gestor y tempo para los parametros del CU
const gestor = gestorNotificaciones.crearGestorNotificaciones(daoNotificaciones)
const tempo = temporizador.crearTemporizador()

//CU para devolver
const CuAlertas = crearCUProgramarNotificaciones(gestor, tempo)

const cuAlertasFactory = {

    return :{

        getCuProgramarAlertas: () => {
            return CuAlertas

        }
    }
}


module.exports = { cuAlertasFactory }


