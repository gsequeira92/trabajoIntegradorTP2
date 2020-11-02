//import PdfPrinter from "pdfmake"
const PdfPrinter = require("pdfmake");
const fs = require("fs");

function billeteVuelo(nombreArchivo, rutaArchivo, objeto){

const datosPDF = require('./datosParaPdf')
datosPDF.recibirObjeto(objeto)

const fonts = require("./fonts");
const styles = require("./styles");
const {content} = require("./pdfBilleteVuelo");
const { guardarArchivo } = require("./guardarArchivo.js");
//nombreArchivo = `pdfTestBillete`;
//rutaArchivo = `pdfs/`;

let docDefinition = {
    content: content,
    styles: styles
};

const printer = new PdfPrinter(fonts);
let pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(guardarArchivo(rutaArchivo, nombreArchivo)); //ver que me pasen la direccion
pdfDoc.end();

}

module.exports = {
    billeteVuelo
}
//archivo main para testear como usuario
//como usarlo desde afuera, que parametros necesito enviarle para que funcione
//me pasan una ruta donde guardar el archivo, devolverla  direccion donde se guardo el pdf.
//creacion del pdf y armado separadas
//definir como me pasan la informacion a colocar en el pdf, es mas comodo que me pasen un array(recomendado) o varios parametros?
//tratar de hacer y luego fijarse si tira error a la hora de guardar el archivo donde me pasaron la ruta