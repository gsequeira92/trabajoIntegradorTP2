//import PdfPrinter from "pdfmake"
const PdfPrinter = require("pdfmake");
const fs = require("fs");
const datosPDF = require('./datosParaPdf')
const fonts = require("./fonts");
const styles = require("./styles");
const { guardarArchivo } = require("./guardarArchivo.js");

function billeteVuelo(nombreArchivo, rutaArchivo, objeto){
datosPDF.verificarObjeto(objeto)
const {content} = require("./pdfBilleteVuelo");

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
    billeteVuelo
}