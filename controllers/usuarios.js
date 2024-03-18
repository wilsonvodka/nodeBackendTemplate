
const { response, request } = require('express')


const usuariosGet = (req = request, res = response) => {

    const {q, nombre, apikey} = req.query

    res.status(200).json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    })
}

const usuariosPut = (req, res) => {

    const id = req.params.id

    res.status(200).json({
        msg: 'put API',
        id
    })
}

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body

    res.status(201).json({
        msg: 'post API',
        nombre,
        edad
    })
}

const usuariosDelete = (req, res) => {
    res.status(200).json({
        msg: 'delete  API'
    })
}

const usuariosPatch = (req, res) => {
    res.status(200).json({
        msg: 'patch  API'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,


}