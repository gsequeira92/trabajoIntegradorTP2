const { crearTemporizador } = require('../gas/Temporizador');

const vuelos = []
const vuelo1 = {
    id: 1123,
    nombre: 'primer vuelo',
    activo: true,
    duracion: 10,
    fecha: Date('December 25, 2020 22:15:30'),
}
const vuelo2 = {
    id: 1543,
    nombre: 'segundo vuelo',
    activo: false,
    duracion: 3,
    fecha: Date('June 10, 2020 10:15:30'),
}
const vuelo3 = {
    id: 164354,
    nombre: 'tercer vuelo',
    activo: false,
    duracion: 5,
    fecha: Date('March 09, 2020 05:15:30'),
}

vuelos.push(vuelo1)
vuelos.push(vuelo2)
vuelos.push(vuelo3)

function verificarVuelos(vuelos) {
    for (const vuelo in vuelos) {
        console.log(vuelo)
    }

}

function notifyFlightsFunction(vuelos){

    for (const vuelo of vuelos) {
        console.log('NOTIFICACION DE VUELO PROXIMO')
    }
}

function main() {

    const tempo = crearTemporizador()

    
    try {
        const evento1 = tempo.programarEventoRecurrente({ myName: "Mi evento", myEvent: () => { verificarVuelos(vuelos) }, interval: 3000 })
        console.log(evento1)
    } catch (error) {
        console.log(error.message)
    }

    //tempo.cancelarEventoRecurrente(evento1)
}

main()
