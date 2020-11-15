const { MongoClient } = require('mongodb')
const { crearReserva } = require('/src/estudiantes/modelos/Reserva.js')
const { crearErrorRecursoNoEncontrado, crearErrorArgumentosInvalidos, crearErrorDeBaseDeDatos
} = require('../../compartido/errores/ApiError.js')
const config = require('../../config/config.js.')

function log(line) {
    if (config.isLogEnabled()) console.log(line)
}
//Primero abrir mongod.exe

//conexion en compass es:
//hostname: localhost
//port: 27017

async function crearReservasDaoDb(cnxString, dbName, collectionName) {

    const client = new MongoClient(cnxString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    //Se conecta a la base de datos que es mongod.exe
    try {
        log('conectandose a mongoDB')
        await client.connect()
        log('conectado!')
    } catch (error) {
        throw crearErrorDeBaseDeDatos(error.message)

    }

    //Equivalente a usar db.use dbName
    const db = client.db(dbName)

    //Equivalente a usar db.collection collectionName
    const collection = db.collection(collectionName)

    return {
        add: async (element) => {
            await collection.insertOne(element)
            delete element._id
        },
        deleteById: async (unId) => {
            const { deletedCount } = await collection.deleteOne({ id: unId })
            if (!deletedCount) {
                throw crearErrorRecursoNoEncontrado(' reserva', unId)
            }
        },
        getAll: async () => {
            const registrosEnColeccion = await collection.find({}).toArray()
            //cada elemento de la coleccion lo "modifica" y lo devuelve como otro array
            //esto crear reservas nuevas con todos los objetos/registros que tiene la collection
            const reservas = registrosEnColeccion.map(reg => crearReserva(reg))
            return reservas
        },
        getById: async (unId) => {
            const registrosEnColeccion = await collection.findOne({ id: unId }).toArray()
            const reservas = registrosEnColeccion.map(reg => crearReserva(reg))
            return reservas
        },
        //sirve para modificar comida
        updateValorComida: async (unId, value) => {
            const reservas = await getById(unId)
            collection.updateOne({
                "id": unId
            }, { $set: { 'comidaSinTacc': value } }
            )

        },
        close: async () => {
            log('cerrando conexion a db')
            await client.close()
            log('conexion cerrada')
        },

    }

}

module.exports = { crearReservasDaoDb }