
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

    }
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