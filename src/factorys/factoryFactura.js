const { generarFactura } = require("./appFacturaVuelo");

//FACTORY FACTURA
function crearFactura({unNombreArchivo,unaRutaArchivo, objeto}) {
    
    nombreArchivo= unNombreArchivo;
    rutaArchivo = unaRutaArchivo;
    contenido = objeto
    //nombreArchivo = `pdfTestFacturaCancelada`;
    //rutaArchivo = `src/servicios/mati/pdfs/`;
    
    generarFactura(nombreArchivo, rutaArchivo, contenido) 
       
}

module.exports = { crearFactura }
