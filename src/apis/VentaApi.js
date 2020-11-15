//import : preguntar marian

function crearVentaApi({crearBoleteriaAvion}){

    const boleteria = crearBoleteriaAvion(dao1,dao2,mailer,notificador )
    
    return{
        venderPasaje: ({idPasajero, idVuelo}) =>{
            boleteria.venderBoleto({idPasajero, idVuelo})

            // return reserva
        }
        
    }

}

module.exports = {
    crearVentaApi
}
//creacions de apis
//mejorar lo del router
//conexion a mongo
//casos de uso que usen daos de mongo
