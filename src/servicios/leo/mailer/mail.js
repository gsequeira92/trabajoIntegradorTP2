
  
const esCorreoElectronico = correoElectronico => /\S+@\S+/.test(correoElectronico);
 



const exito = "lpretti@gmail.com"
const falla = "@gmail.com"

console.log( esCorreoElectronico(exito))
console.log( esCorreoElectronico(falla))