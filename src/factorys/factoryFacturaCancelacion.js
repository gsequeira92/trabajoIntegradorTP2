const { generarFacturaCancelada } = require("./appFacturaCancelacionVuelo");

//FACTORY FACTURA CANCELADA
function crearFacturaCancelada({unNombreArchivo,unaRutaArchivo, objeto}) {

    nombreArchivo= unNombreArchivo;
    rutaArchivo = unaRutaArchivo;
    contenido = objeto
    //nombreArchivo = `pdfTestFacturaCancelada`;
    //rutaArchivo = `src/servicios/mati/pdfs/`;
    
    const rutaPdf = generarFacturaCancelada(nombreArchivo, rutaArchivo, contenido)
    return rutaPdf 
        
}

module.exports = { crearFacturaCancelada }