//armar cu con nuevas dependencias -DONE
//no validar cliente -DONE
//El mail del cliente o de la reserva? definir -DONE : Reserva
//Notificaciones se guardan en un DAO exclusivo o se agregan a la reserva?--DONE DAO
//Dividir gestor de notificaciones del Temporizador- DONE

//Ver si tienen superclase o interface que los usa juntos
//Checkear Dao's para ver que tienen sus funciones

function crearCUCancelacionReserva({ ReservaDb, mailer, factoryFacturaCancelada, gestorNotificaciones }) {

    return {
        execute: async (idReserva) => {


            const reserva = await ReservaDb.getReservaById(idReserva)

            const mailPasajero = reserva.mailPasajero

            //Dao borra reserva de DB
            await ReservaDb.deleteById(idReserva)

            //genera PDF con confirmacion de cancelacion
            factoryFacturaCancelada(`${"cancelacion de reserva nro: " + idReserva}`, rutaArchivo)

            //agregar el pdfAdjunto al sobre e ir construyendolo
            const sobre = mailer.getSobre()
            sobre.from(mailer.from)
            sobre.to(mailPasajero)
            sobre.title("cancelacion de reserva")
            sobre.text("Le informamos respecto de su cancelacion")
            sobre.addAttachments(rutaArchivo)

            //mailer deberia incluir el sobre para configurarlos de alguna forma y solo usar sendMail()
            mailer.sendMail(sobre)
            //desuscribir
            gestorNotificaciones.cancelarSuscripcionANotificacion(idReserva)


        }
    }

}
//let pdfAdjunto = new Blob(fs.readFile(rutaArchivo, 'uft8'), { type: 'application/pdf' })
module.exports = { crearCUCancelacionReserva }
