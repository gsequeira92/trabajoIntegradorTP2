//import PdfPrinter from "pdfmake"
const PdfPrinter = require("pdfmake");
const fs = require("fs");

function factura(nombreArchivo, rutaArchivo, objeto){

const datosPDF = require('./datosParaPdf')
datosPDF.recibirObjeto(objeto)

const fonts = require("./fonts");
const styles = require("./styles");
const {content} = require("./pdfFacturaVuelo");
const { guardarArchivo } = require("./guardarArchivo.js");

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
    factura
}