const { generarFacturaCancelada } = require("./appFacturaCancelacionVuelo");

//FACTORY FACTURA CANCELADA
function crearFacturaCancelada({unNombreArchivo,unaRutaArchivo, objeto}) {

    const nombreArchivo= unNombreArchivo;
    const rutaArchivo = unaRutaArchivo;
    const contenido = objeto;
    //nombreArchivo = `pdfTestFacturaCancelada`;
    //rutaArchivo = `src/servicios/mati/pdfs/`;
    
    const rutaPdf = generarFacturaCancelada(nombreArchivo, rutaArchivo, contenido)
    return rutaPdf 
        
}

module.exports = { crearFacturaCancelada }