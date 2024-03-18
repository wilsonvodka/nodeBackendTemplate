const express = require('express')
const cors = require('cors')



class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT || 8080
        this.usuariosRoutePath = '/api/usuarios'

        //Middlewares
        this.middlewars()


        //Rutas de mi aplicacion
        this.routes()
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
