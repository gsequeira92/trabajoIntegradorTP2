const fs = require('fs')
let hoy = new Date();
let fecha = hoy.getFullYear()+'-'+ hoy.getMonth()+'-'+hoy.getDay()+' a las '+hoy.getHours()+'.'+hoy.getMinutes()+'.'+hoy.getSeconds()
module.exports = {
    guardarArchivo(rutaArchivo, nombreArchivo){
        try {
            if (fs.existsSync(rutaArchivo)) {
                console.log('La ruta existe.');
                if(fs.existsSync(`${rutaArchivo}`+`${nombreArchivo}`+".pdf")) {
                    console.log('archivo existe, se agrega (nro)')
                    return fs.createWriteStream(`${rutaArchivo}`+`${nombreArchivo}`+ ' ' + fecha+".pdf")
                  }else{
                      console.log('el archivo no existia')
                  }
                 return fs.createWriteStream(`${rutaArchivo}`+`${nombreArchivo}`+".pdf")
              }
        } catch (error) {
            throw new Error('ruta invalida')
        }
    }
}


