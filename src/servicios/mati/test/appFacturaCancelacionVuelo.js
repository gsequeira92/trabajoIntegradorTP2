const PdfPrinter = require("pdfmake");
const fs = require("fs");
const fonts = require("./fonts");
const styles = require("./styles");
const { guardarArchivo } = require("./guardarArchivo.js");
const contenidoPdf = require("./pdfFacturaCancelacionVuelo");

function generarFacturaCancelada(nombreArchivo, rutaArchivo, datosFactura) {
    const { content } = contenidoPdf.crearContenidoFacturaCancelada(datosFactura)

    let docDefinition = {
        content: content,
        styles: styles
    };

    const printer = new PdfPrinter(fonts);
    let pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(guardarArchivo(rutaArchivo, nombreArchivo));
    pdfDoc.end();

}

module.exports = {
    generarFacturaCancelada
}