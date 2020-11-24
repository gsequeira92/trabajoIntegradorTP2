const { generarFactura } = require("./appFacturaVuelo");

//FACTORY FACTURA
function crearFactura({unNombreArchivo,unaRutaArchivo, objeto}) {
    
    const nombreArchivo= unNombreArchivo;
    const rutaArchivo = unaRutaArchivo;
    const contenido = objeto;
    //nombreArchivo = `pdfTestFacturaCancelada`;
    //rutaArchivo = `src/servicios/mati/pdfs/`;
    
    const rutaPdf = generarFactura(nombreArchivo, rutaArchivo, contenido)
    return rutaPdf
       
}

module.exports = { crearFactura }
