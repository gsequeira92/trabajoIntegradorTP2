
let nextId = 1
function crearNotificacion(objeto) {

    const notificacion = {}

    if (!objeto.id) {
        notificacion.id = nextId++
    } else {
        notificacion.id = objeto.id
    }

    return notificacion
}

module.exports={crearNotificacion}