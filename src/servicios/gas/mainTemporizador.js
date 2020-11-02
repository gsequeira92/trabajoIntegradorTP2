import { crearTemporizador } from "../src/servicios/gas/Temporizador.js"

const vuelos = []
const vuelo1 = {
    id: 1123,
    nombre: 'primer vuelo',
    activo: true,
    duracion: 10,
}
const vuelo2 = {
    id: 1543,
    nombre: 'segundo vuelo',
    activo: true,
    duracion: 3,
}
const vuelo3 = {
    id: 164354,
    nombre: 'tercer vuelo',
    activo: false,
    duracion: 5,
}

vuelos.push(vuelo1)
vuelos.push(vuelo2)
vuelos.push(vuelo3)

function verificarVuelosActivos(vuelos) {

    if (vuelos.lenght() > 0) {
        const vuelosActivos = vuelos.filter(e => e.activo === true)
        return vuelosActivos
    }
}

function main() {

    const tempo = crearTemporizador()
    const evento1 = tempo.temporizarEventoRecurrente({ myName: "PRIMER EVENTO", myEvent: verificarVuelosActivos(vuelos), interval: 7000 })
    console.log(evento1)
    tempo.cancelarEventoRecurrente(evento1)
}

main()
