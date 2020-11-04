const moment = require('moment')

//--------------------------------------------------------------------------------------------------//
//intervalo 1 vez por hora, ese intervalo trae a los vuelos que tienen que ser notificados y marcarlos como ejecutado.
//map-reduce mongoDb (Indices!)
//Queue
//Query en db para obtener eventos en el tiempo


//cambiar de estructura
//daoVuelos maneja vuelos para filtrar
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

function crearTemporizador() {

    return {

        /**
         * parece que ahora podria usarse internamente para programar otras cosas
         * @param {*} myName 
         * @param {*} myEvent 
         * @param {*} interval 
         */
        programarEventoRecurrente({ myName, myEvent, interval }) {


            if (!esNombreValido(myName)) {
                throw new Error('Ha ingresado un nombre erroneo')

            } else if (!esEventoValido(myEvent)) {
                throw new Error('El evento/funcion no es valido')

            } else if (!esIntervaloValido(interval)) {
                throw new Error('Ha ingresado un intervalo erroneo')

            } else {

                const intervalObject = setInterval(() => {
                    myEvent()
                }, interval);
                intervalObject.name = myName
                return intervalObject.name
            }
        },

        /**
         * Cancela enventos recurrentes 
         * @idDeEventoRecurrente {*} myEvent 
         */
        cancelarEventoRecurrente(myEvent) {

            try {
                validarEvento(myEvent)
                clearInterval(myEvent)
            } catch (error) {
                console.log(error)
            }
        },

        /**
         * cada una hora revisa las notificaciones subscriptas
         * y activa la function notify()
         */
        activarNotificacionesPorHora(intervalName, intervalTime) {
            const intervalObject = setInterval(() => {

                flightNotificationsQueue.notify()

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
            flightNotificationsQueue.enqueue(Reserva)
        },

    }
}

function esReservaValida(unaReserva) {

    return unaReserva !== undefined && !unaReserva.isEmpty
}

function esNombreValido(unNombre) {

    let valido = false
    if (!unNombre.isEmpty && unNombre !== undefined) {
        valido = true
    }
    return valido
}

//isValid
function esEventoValido(unEvento) {

    return typeof unEvento === 'function'
}

function esIntervaloValido(interval) {

    let valido = false
    if (!interval.isNan && interval > 0) {
        valido = true
    }
    return valido
}

module.exports = { crearTemporizador }