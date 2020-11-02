const fs = require('fs')
let objeto = {

}
function recibirObjeto(obj){
objeto = obj
}

module.exports = {
    contenido(){
    return objeto 
    },
    recibirObjeto
}








/*contenido(){
    try {
        const data = fs.readFileSync('./pdf/datosParaPdf.txt', 'utf-8');
        return data
    } catch (error) {
        throw new Error('ruta invalida')
    }
},
 array(str, separador) {
     console.log(str)
    const strings = str.split(separador)
    console.log(strings.length)
    const datos = []
    for (let s of strings) {
        if (s.length > 0) {
            datos.push(s)
            console.log(s)
        }
    }
    return datos
}*/