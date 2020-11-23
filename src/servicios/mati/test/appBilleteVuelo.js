const PdfPrinter = require("pdfmake");
const fs = require("fs");
const fonts = require("./fonts");
const styles = require("./styles");
const { guardarArchivo } = require("./guardarArchivo.js");
const contenidoPdf = require("./pdfBilleteVuelo");

function generarPdfBillete(nombreArchivo, rutaArchivo, datosDelBillete) { //"generar pdf billete" y objeto por datosDelBillete
    const { content } = contenidoPdf.crearContenidoPdfBillete(datosDelBillete)//sugerencia marian "crearContenidoPdfBillete"

    let docDefinition = {
        content: content,
        styles: styles
    };

    const printer = new PdfPrinter(fonts);
    let pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(guardarArchivo(rutaArchivo, nombreArchivo));
    pdfDoc.end();
    const pdfRutaArchivo = `${rutaArchivo}/${nombreArchivo}`
    return pdfRutaArchivo

}

module.exports = {
    generarPdfBillete
}