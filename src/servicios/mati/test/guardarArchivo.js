const { exception } = require('console');
const fs = require('fs')

function generarFecha() {
    let hoy = new Date();
    let fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear() + ' a las ' + hoy.getHours() + '.' + hoy.getMinutes() + '.' + hoy.getSeconds()
    return fecha
}

function validarRuta(rutaArchivo) {
    try {
        if (!fs.existsSync(rutaArchivo)) {
            throw exception
        }
    } catch (error) {
        throw new Error('ruta invalida')
    }
}

function crearWriteStream(rutaArchivo, nombreArchivo){
    return fs.createWriteStream(`${rutaArchivo}` + `${nombreArchivo}` + ' ' + generarFecha() + ".pdf")
}

function guardarArchivo(rutaArchivo, nombreArchivo) {
    validarRuta(rutaArchivo)
    return nombreArchivo = crearWriteStream(rutaArchivo, nombreArchivo)
   
    
}
module.exports = {
    guardarArchivo
}
//validar ruta
//crear string (nombre de archivo)
//crear el writestream 
//devolverlo 