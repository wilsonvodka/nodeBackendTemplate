const express = require('express')
const cors = require('cors')

const {dbConnection} = require('../database/config')


class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usuariosRoutePath = '/api/usuarios'

        //conectar a base de datos
        this.conectarDB()

        //Middlewares
        this.middlewars()


        //Rutas de mi aplicacion
        this.routes()
    }

    async conectarDB(){
        await dbConnection()
    }

    middlewars() {
        //CORS
        this.app.use(cors())

        //parseo y lectura del body
        this.app.use(express.json())


        //directorio publico
        this.app.use(express.static('public'))
    }
    routes() {

        this.app.use(this.usuariosRoutePath,require('../routes/usuarios'))



    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en el puerto', this.port)
        })
    }
}


module.exports = Server