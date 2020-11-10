const historiaUsuario = require('./historiaUsuario.js')

const comida = true
const idReserva = "1"

try {
    await historiaUsuario.modificarComidaDeVuelo(idReserva, comida)
} catch (err) {
    console.log('Error ' + e.message) 
}