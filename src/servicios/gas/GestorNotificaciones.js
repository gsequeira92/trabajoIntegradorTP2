
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
        obtenerSuscriptos(){
           return await daoNotificaciones.getAll()
        },

    }

}
function esReservaValida(unaReserva) {

    return unaReserva !== undefined && !unaReserva.isEmpty
}

module.exports = { crearGestorNotificaciones }