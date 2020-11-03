const moment = require ('moment')

// const flight = new Date('December 25, 2020 22:15:30')
// const flightDay = flight.getDay()
// const flightHour = flight.getHours()
// const flightYear = flight.getFullYear()
//console.log(moment(flight).subtract(10, "days").calendar())
//intervalo 1 vez por hora, ese intervalo trae a los vuelos que tienen que ser notificados y marcarlos como ejecutado.
//map reduce mongoDb (Indices!)
//Queue
//Query en db para obtener eventos en el tiempo

function flightNotificationsQueue() {

    this.dataStore = Array.prototype.slice.call(arguments, 0);
    this.enqueue = enqueue;
    this.dequeue = dequeue;
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
}

function crearTemporizador() {



    return {

        programarEventoRecurrente({ myName, myEvent, interval }) {


            if (!validarNombre(myName)) {
                throw new Error('Ha ingresado un nombre erroneo')

            } else if (!validarEvento(myEvent)) {
                throw new Error('El evento/funcion no es valido')

            } else if (!validarIntervalo(interval)) {
                throw new Error('Ha ingresado un intervalo erroneo')

            } else {

                const intervalObject = setInterval(() => {
                    myEvent()
                }, interval);
                intervalObject.name = myName
                return intervalObject.name
            }
        },

        cancelarEventoRecurrente(myEvent) {

            try {
                validarEvento(myEvent)
                clearInterval(myEvent)
            } catch (error) {
                console.log(error)
            }

        },

        activarNotificacionesPorHora({flightQueueToNotify, notifyFunction}){

            //cada una hora intervalo
            setInterval(() => {
        
                notifyFunction(flightQueueToNotify)
                
            }, 100000.08);
        
        },

        crearNotificacionVuelo(reserva){

            flightNotificationsQueue.enqueue(reserva)
        },


    }
}

function validarNombre(unNombre) {

    let valido = false
    if (!unNombre.isEmpty && unNombre !== undefined) {
        valido = true
    }
    return valido
}

//isValid
function validarEvento(unEvento) {

    return typeof unEvento === 'function'
}

function validarIntervalo(interval) {

    let valido = false
    if (!interval.isNan && interval > 0) {
        valido = true
    }
    return valido
}

module.exports = { crearTemporizador }