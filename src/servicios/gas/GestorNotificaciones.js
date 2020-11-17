const moment = require('moment')
//los id de las notificaciones son == al id de la reserva


function crearGestorNotificaciones(daoNotificaciones) {
    return {

        suscribirANotificacion(Reserva) {

            if (!esReservaValida(Reserva)) {
                throw new Error('Ha intentado agregar notificaciones para una reserva invalida')
            }
            daoNotificaciones.add(crearNotificacion(Reserva.id))
        },
        cancelarSuscripcionANotificacion(Reserva) {
            if (!esReservaValida(Reserva)) {
                throw new Error('Ha intentado cancelar para una reserva invalida')
            }
            daoNotificaciones.deleteById(Reserva.id)
        },
        getNearDepartureFlights(daoNotificaciones) {

            if (daoNotificaciones.size <= 0) {
                throw new Error('No hay reservas para notificar/filtrar')
            }
            return daoNotificaciones.filter(e => moment(e.horaPartida).endOf('hors').fromNow() === 2)

        },
        notify() {
           
            getNearDepartureFlights(daoNotificaciones).forEach(console.log('NOTIFICACION VUELO'))

        }

    }

}


function esReservaValida(unaReserva) {

    return unaReserva !== undefined && !unaReserva.isEmpty
}

module.exports = { crearGestorNotificaciones }