const assert = require('assert')
const { crearEstudiantesDao } = require('../../../src/estudiantes/dao/EstudiantesDaoFactory.js')
const { crearEstudiante } = require('../../../src/estudiantes/modelos/Estudiante.js')

const estuValido = {
    nombre: 'mariano',
    apellido: 'aquino',
    edad: 34,
    dni: '123'
}

const estuValido2 = {
    nombre: 'juana',
    apellido: 'perez',
    edad: 35,
    dni: '456'
}

describe('dao de estudiantes', () => {
    let dao

    before(async () => {
        dao = await crearEstudiantesDao()
    })

    after(async () => {
        await dao.close()
    })

    afterEach(async () => {
        await dao.deleteAll()
    })

    describe('getAll', () => {
        describe('si no hay estudiantes', () => {
            it('devuelve una coleccion vacia', async () => {
                const estudiantes = await dao.getAll()
                const esperado = []
                assert.deepStrictEqual(estudiantes, esperado)
            })
        })

        describe('si hay estudiantes', () => {
            it('devuelve una coleccion con esos estudiantes', async () => {
                const creado1 = crearEstudiante(estuValido)
                const creado2 = crearEstudiante(estuValido2)
                await dao.addAll([creado1, creado2])
                const estudiantes = await dao.getAll()
                const esperado = [creado1, creado2]
                assert.deepStrictEqual(estudiantes, esperado)
            })
        })
    })

    describe('getByDni', () => {
        describe('si hay estudiantes y alguno con ese dni', () => {
            it('devuelve una coleccion con ese estudiante', async () => {
                const creado1 = crearEstudiante(estuValido)
                const creado2 = crearEstudiante(estuValido2)
                await dao.addAll([creado1, creado2])
                const estudiantes = await dao.getByDni('123')
                const esperados = [creado1]
                assert.deepStrictEqual(estudiantes, esperados)
            })
        })
    })

    describe('getByAge', () => {
        describe('si hay estudiantes y alguno con edad en rango', () => {
            it('devuelve una coleccion con esxs estudiantes', async () => {
                const creado1 = crearEstudiante(estuValido)
                const creado2 = crearEstudiante(estuValido2)
                await dao.addAll([creado1, creado2])
                const estudiantes = await dao.getByAge({
                    desde: 20,
                    hasta: 34
                })
                const esperados = [creado1]
                assert.deepStrictEqual(estudiantes, esperados)
            })
        })
    })

    describe('add', () => {
        it('agrega un estudiante a la coleccion', async () => {
            const creado1 = crearEstudiante(estuValido)
            await dao.add(creado1)
            const estudiantes = await dao.getAll()
            const esperados = [creado1]
            assert.deepStrictEqual(estudiantes, esperados)
        })
    })

    describe('deleteById', () => {
        describe('si hay estudiantes y alguno con ese id', () => {
            it('lo borra del sistema', async () => {
                const creado1 = crearEstudiante(estuValido)
                const creado2 = crearEstudiante(estuValido2)
                await dao.addAll([creado1, creado2])
                await dao.deleteById(creado1.id)
                const all = await dao.getAll()
                assert.deepStrictEqual(all, [creado2])
            })
        })

        describe('si no hay un estudiantes con ese id', () => {
            it('lanza un error', async () => {
                await assert.rejects(async () => {
                    await dao.deleteById(123)
                }, (error) => {
                    assert.strictEqual(error.type, 'NOT_FOUND')
                    return true
                })
            })
        })
    })

    describe('updateById', () => {
        describe('si no hay un estudiantes con ese id', () => {
            it('lanza un error', async () => {
                const estuCreado = crearEstudiante(estuValido)
                await assert.rejects(async () => {
                    await dao.updateById(estuCreado)
                }, (error) => {
                    assert.strictEqual(error.type, 'NOT_FOUND')
                    return true
                })
            })
        })

        describe('si hay estudiantes y alguno con ese id', () => {
            it('lo reemplaza', async () => {
                const estuCreado = crearEstudiante(estuValido)
                await dao.add(estuCreado)

                const estuModificado = { ...estuCreado }
                estuModificado.nombre = 'nuevo nombre'
                estuModificado.apellido = 'nuevo apellido'

                await dao.updateById(estuModificado)
                const all = await dao.getAll()
                assert.deepStrictEqual(all, [estuModificado])
            })
        })
    })
})