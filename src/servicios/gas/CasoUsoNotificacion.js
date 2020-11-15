const moment = require('moment')


//daoVuelos maneja vuelos para filtrar
//intervalo 1 vez por hora, ese intervalo trae a los vuelos que tienen que ser notificados y marcarlos como ejecutado.
//map-reduce mongoDb (Indices!)
//Query en db para obtener eventos en el tiempo

function crearCUNotificacion({,gestorNotificaciones,Temporizador }) {

    return {
        execute: async (idCliente, idReserva) => {

            if (await ReservaDb.getReservaById(idReserva)) {
                const mailPasajero = await daoReservas.getEmailPasajero(idCliente)

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
                gestorNotificaciones.cancelarNotificacionVuelo(idReserva)
            }

        }
    }

}

function flightNotificationsQueue() {

    this.dataStore = Array.prototype.slice.call(arguments, 0);
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.notify = notify;
    this.getNearDepartureFlights = getNearDepartureFlights;
    this.empty = empty;
    this.print = print;

    function enqueue(element) {
        this.dataStore.push(element);
    }

    function dequeue() {
        return this.dataStore.shift();
    }

    function empty() {
        return this.dataStore = [];
    }

    function print(element) {
        this.dataStore.forEach(function (item) {
            // element.appendChild(item.node);
            console.log(item);
        });
    }

    function notify() {

        const nearDeparture = this.getNearDepartureFlights()
        nearDeparture.forEach(console.log('NOTIFICACION DE VUELO'))
    }

    //vuelos cuyo horario se complete en 2 horas
    //"funcion de dao"
    function getNearDepartureFlights() {

        return this.dataStore.filter(e => moment(e.horaPartida).endOf('hours').fromNow() === 2)

    }
}

function notify() {

    getNearDepartureFlights(reservasANotificar).forEach(console.log('NOTIFICACION VUELO'))
}

function getNearDepartureFlights() {

    if (reservasANotificar.size <= 0) {
        throw new Error('No hay reservas para notificar/filtrar')
    }
    return reservasANotificar.filter(e => moment(e.horaPartida).endOf('hors').fromNow() === 2)

}


function programarNotificaciones() {

    return {

        /**
         * cada una hora revisa las notificaciones subscriptas
         * y activa la function notify()
         */
        activarNotificacionesPorHora(intervalName, intervalTime) {
            const intervalObject = setInterval(() => {

                notify()

            }, intervalTime);

            intervalObject.name = intervalName
            return intervalName
        },


        /**
         * agrega reserva a la estructura de reservas a notificar
         * @param {*} Reserva 
         */
        crearNotificacionDeVuelo(Reserva) {

            if (!esReservaValida(Reserva)) {
                throw new Error('Ha intentado agregar notificaciones para una reserva invalida')
            }
            reservasANotificar.push(Reserva)
        },


    }
}

function esReservaValida(unaReserva) {

    return unaReserva !== undefined && !unaReserva.isEmpty
}

module.exports = { programarNotificaciones }