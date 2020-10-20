const assert = require('assert')
const { crearEstudiantesDao } = require('../../../src/estudiantes/dao/EstudiantesDaoFactory.js')
const { crearEstudiante } = require('../../../src/estudiantes/modelos/Estudiante.js')
const { crearEstudiantesApi } = require('../../../src/estudiantes/aplicacion/EstudiantesApi.js')
const { crearEstudiantesDaoConFallas } = require('../../doubles/EstudiantesDaoConFallas.js')

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

describe('aplicacion', () => {
    describe('si la base de datos anda bien', () => {

        let dao
        let api

        before(async () => {
            dao = await crearEstudiantesDao()
        })

        beforeEach(async () => {
            api = crearEstudiantesApi(dao)
        })

        afterEach(async () => {
            await dao.deleteAll()
        })

        after(async () => {
            await dao.close()
        })

        describe('getAll', () => {
            describe('si no hay estudiantes', () => {
                it('devuelve una coleccion vacia', async () => {
                    const estudiantes = await api.getAll()
                    const esperado = []
                    assert.deepStrictEqual(estudiantes, esperado)
                })
            })

            describe('si hay estudiantes', () => {
                it('devuelve una coleccion con esos estudiantes', async () => {
                    const creado1 = crearEstudiante(estuValido)
                    const creado2 = crearEstudiante(estuValido2)
                    await dao.addAll([creado1, creado2])
                    const estudiantes = await api.getAll()
                    const esperado = [creado1, creado2]
                    assert.deepStrictEqual(estudiantes, esperado)
                })
            })
        })

        describe('getByDni', () => {
            describe('si hay estudiantes pero ninguno con ese dni', () => {
                it('devuelve una coleccion vacia', async () => {
                    await dao.add(crearEstudiante(estuValido2))
                    const estudiantes = await api.getByDni('123')
                    const esperado = []
                    assert.deepStrictEqual(estudiantes, esperado)
                })
            })

            describe('si hay estudiantes y alguno con ese dni', () => {
                it('devuelve una coleccion con ese estudiante', async () => {
                    const creado1 = crearEstudiante(estuValido)
                    const creado2 = crearEstudiante(estuValido2)
                    await dao.addAll([creado1, creado2])
                    const estudiantes = await api.getByDni('123')
                    const esperado = [creado1]
                    assert.deepStrictEqual(estudiantes, esperado)
                })
            })
        })

        describe('getByAge', () => {
            describe('si hay estudiantes pero ninguno con edad en rango', () => {
                it('devuelve una coleccion vacia', async () => {
                    const creado1 = crearEstudiante(estuValido)
                    const creado2 = crearEstudiante(estuValido2)
                    await dao.addAll([creado1, creado2])
                    const estudiantes = await api.getByAge({
                        desde: 90,
                        hasta: 100
                    })
                    const esperado = []
                    assert.deepStrictEqual(estudiantes, esperado)
                })
            })

            describe('si hay estudiantes y alguno con edad en rango', () => {
                it('devuelve una coleccion con esxs estudiantes', async () => {
                    const creado1 = crearEstudiante(estuValido)
                    const creado2 = crearEstudiante(estuValido2)
                    await dao.addAll([creado1, creado2])
                    const estudiantes = await api.getByAge({
                        desde: 20,
                        hasta: 34
                    })
                    const esperado = [creado1]
                    assert.deepStrictEqual(estudiantes, esperado)
                })
            })
        })

        describe('create', () => {
            describe('si hay estudiantes con el mismo dni', () => {
                it('lanza un error de argumentos invalidos y no lo agrega a la coleccion', async () => {
                    await dao.add(crearEstudiante(estuValido))
                    await assert.rejects(async () => {
                        await api.create(estuValido)
                    },
                        (err) => {
                            assert.strictEqual(err.type, 'INVALID_ARGS')
                            return true
                        })
                })
            })

            describe('si no hay estudiantes con el nuevo dni', () => {
                it('asigna un id al estudiante y lo agrega a la coleccion', async () => {
                    const estudiante = await api.create(estuValido)
                    assert(!!estudiante.id)
                    delete estudiante.id
                    assert.deepStrictEqual(estudiante, estuValido)
                })
            })

            describe('al agregar nuevxs estudiantes', () => {
                it('asigna nuevos ids para cada unx', async () => {
                    const estudiante1 = await api.create(estuValido)
                    const estudiante2 = await api.create(estuValido2)
                    assert(!!estudiante1.id)
                    assert(!!estudiante2.id)
                    assert(estudiante1.id !== estudiante2.id)
                })
            })
        })

        describe('deleteById', () => {
            describe('si no hay un estudiantes con ese id', () => {
                it('lanza un error de recurso no encontrado', async () => {
                    await assert.rejects(async () => {
                        await api.deleteById(1)
                    }, (error) => {
                        assert.strictEqual(error.type, 'NOT_FOUND')
                        return true
                    })
                })
            })

            describe('si hay estudiantes y alguno con ese id', () => {
                it('lo borra del sistema', async () => {
                    const creado1 = crearEstudiante(estuValido)
                    const creado2 = crearEstudiante(estuValido2)
                    await dao.addAll([creado1, creado2])
                    await api.deleteById(creado1.id)
                    const estudiantes = await dao.getAll()
                    assert.deepStrictEqual(estudiantes, [creado2])
                })
            })
        })

        describe('replaceById', () => {
            describe('si no hay un estudiantes con ese id', () => {
                it('lanza un error de recurso no encontrado', async () => {
                    const estuCreado = crearEstudiante(estuValido)
                    await assert.rejects(async () => {
                        await api.replaceById(estuCreado, estuCreado.id)
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

                    const estudiante = await api.replaceById(estuModificado, estuModificado.id)

                    assert.deepStrictEqual(estuModificado, estudiante)
                    const estudiantes = await dao.getAll()
                    assert.deepStrictEqual(estudiantes, [estuModificado])
                })
            })
        })
    })

    async function assertItThrowsInternalError(block) {
        await assert.rejects(async () => {
            await block()
        }, error => {
            assert.strictEqual(error.type, 'INTERNAL_ERROR')
            return true
        })
    }

    describe('si la base de datos esta caida', () => {

        let dao
        let api

        before(async () => {
            dao = await crearEstudiantesDaoConFallas()
            api = crearEstudiantesApi(dao)
        })

        after(async () => {
            await dao.close()
        })

        describe('getAll', () => {
            it('lanza un error de tipo interno', async () => {
                await assertItThrowsInternalError(async () => {
                    await api.getAll()
                })
            })
        })

        describe('getByDni', () => {
            it('lanza un error de tipo interno', async () => {
                await assertItThrowsInternalError(async () => {
                    await api.getByDni('123')
                })
            })
        })

        describe('getByAge', () => {
            it('lanza un error de tipo interno', async () => {
                await assertItThrowsInternalError(async () => {
                    await api.getByAge({
                        desde: 90,
                        hasta: 100
                    })
                })
            })
        })

        describe('post', () => {
            it('lanza un error de tipo interno', async () => {
                await assertItThrowsInternalError(async () => {
                    await api.create(estuValido)
                })
            })
        })

        describe('deleteById', () => {
            it('lanza un error de tipo interno', async () => {
                await assertItThrowsInternalError(async () => {
                    await api.deleteById(1)
                })
            })
        })

        describe('put', () => {
            it('lanza un error de tipo interno', async () => {
                await assertItThrowsInternalError(async () => {
                    const estuCreado = crearEstudiante(estuValido)
                    await api.replaceById(estuCreado, estuCreado.id)
                })
            })
        })
    })
})
