const { MongoClient } = require('mongodb')
const { crearEstudiante } = require('../modelos/Estudiante.js')
const { crearErrorRecursoNoEncontrado, crearErrorArgumentosInvalidos, crearErrorDeBaseDeDatos
} = require('../../compartido/errores/ApiError.js')
const config = require('../../config/config.js')

function log(line) {
    if (config.isLogEnabled()) console.log(line)
}

async function crearEstudiantesDaoDb({ cnxStr, dbName, collectionName }) {

    const client = new MongoClient(cnxStr, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    try {
        log('conectandose a mongodb...')
        await client.connect()
        log('...conectado!')
    } catch (error) {
        throw crearErrorDeBaseDeDatos(error.message)
    }

    const db = client.db(dbName)
    const collection = db.collection(collectionName)

    return {
        getAll: async () => {
            const registros = await collection.find({}).toArray()
            const estudiantes = registros.map(reg => crearEstudiante(reg))
            return estudiantes
        },
        getByDni: async (unDni) => {
            const registros = await collection.find({ dni: unDni }).toArray()
            const estudiantes = registros.map(reg => crearEstudiante(reg))
            return estudiantes
        },
        getByAge: async ({ desde, hasta }) => {
            const registros = await collection.find({ edad: { $gte: desde, $lte: hasta } }).toArray()
            const estudiantes = registros.map(reg => crearEstudiante(reg))
            return estudiantes
        },
        addAll: async (elements) => {
            await collection.insertMany(elements)
            for (const e of elements) {
                delete e._id
            }
        },
        add: async (element) => {
            await collection.insertOne(element)
            delete element._id
        },
        addUnique: async (elemento, campo) => {
            const query = {}
            query[campo] = elemento[campo]

            const result = await collection.updateOne(
                query,
                { $setOnInsert: elemento },
                {
                    upsert: true,
                    returnOriginal: false
                }
            )

            if (result.matchedCount > 0) {
                throw crearErrorArgumentosInvalidos('campo unico no respetado')
            }

            delete elemento._id
            return elemento
        },
        deleteById: async (unId) => {
            const { deletedCount } = await collection.deleteOne({ id: unId })
            if (!deletedCount) {
                throw crearErrorRecursoNoEncontrado('estudiante', unId)
            }
        },
        updateById: async (estudiante) => {
            const { modifiedCount } = await collection.replaceOne({ id: estudiante.id }, estudiante)
            if (modifiedCount === 0) {
                throw crearErrorRecursoNoEncontrado('estudiante', estudiante.id)
            }
            delete estudiante._id
            return estudiante
        },
        deleteAll: async () => {
            return await collection.deleteMany({})
        },
        close: async () => {
            log('cerrando conexion a mongodb...')
            await client.close()
            log('...conexion cerrada!')
        }
    }
}

module.exports = { crearEstudiantesDaoDb }