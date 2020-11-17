
//intervalo 1 vez por hora, ese intervalo trae a los vuelos que tienen que ser notificados y notificarlos

function crearCUProgramarNotificaciones({ gestorNotificaciones, temporizador }) {

    return {
        execute: async (nombreEventoTemporizado, intervalo) => {

            temporizador.programarEventoRecurrente({

                myName: nombreEventoTemporizado, myEvent: () => {

                    gestorNotificaciones.notify()

                }, interval: intervalo
            })

        }

    }


}

module.exports = { crearCUProgramarNotificaciones }