function crearTemporizador() {

    return {

        programarEventoRecurrente({ myName, myEvent, interval }) {

            try {
                validarNombre(myName)
                validarEvento(myEvent)
                validarIntervalo(interval)
                const intervalObject = setInterval(() => {
                    myEvent()
                }, interval);
                intervalObject.name = myName
                return intervalObject.name

            } catch (error) {
                console.log(error)
            }

        },

        cancelarEventoRecurrente(myEvent) {

            try {
                validarEvento(myEvent)
                clearInterval(myEvent)
            } catch (error) {
                console.log(error)
            }

        }


    }
}

function validarNombre(unNombre) {
    return nombre = !unNombre ? new Error('El nombre no es valido') : unNombre

}

function validarEvento(unEvento) {

    if (unEvento === undefined) {

        throw new Error('este evento es invalido')
    }
    return unEvento
}

function validarIntervalo(interval) {

    if (interval.isNan() || interval <= 0) {


        throw new Error('El intervalo debe ser numerico y mayor a cero')
    }
    return interval
}

module.exports={crearTemporizador}