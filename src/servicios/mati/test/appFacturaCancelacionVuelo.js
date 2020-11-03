const PdfPrinter = require("pdfmake");
const fs = require("fs");
//const datosPDF = require('./datosParaPdf')
const fonts = require("./fonts");
const styles = require("./styles");
const { guardarArchivo } = require("./guardarArchivo.js");
const contenidoPdf = require("./pdfFacturaCancelacionVuelo");

function facturaCancelada(nombreArchivo, rutaArchivo, objeto){
const {content} = contenidoPdf.devolverContenido(objeto)

let docDefinition = {
    content: content,
    styles: styles
};

const printer = new PdfPrinter(fonts);
let pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(guardarArchivo(rutaArchivo, nombreArchivo));
pdfDoc.end();
console.log('PDF guardado')

}

module.exports = {
    facturaCancelada
}