const fs = require('fs')
let hoy = new Date();
let fecha = hoy.getFullYear()+'-'+ hoy.getMonth()+'-'+hoy.getDay()+' a las '+hoy.getHours()+'.'+hoy.getMinutes()+'.'+hoy.getSeconds()
module.exports = {
    guardarArchivo(rutaArchivo, nombreArchivo){
        try {
            if (fs.existsSync(rutaArchivo)) {
                console.log('La ruta existe.');
                console.log('Se agrega fecha y hora')
                    return fs.createWriteStream(`${rutaArchivo}`+`${nombreArchivo}`+ ' ' + fecha+".pdf")
              }
        } catch (error) {
            throw new Error('ruta invalida')
        }
    }
}