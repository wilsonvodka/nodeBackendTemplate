
const { response, request } = require('express')
const bcryptjs = require('bcryptjs')



const Usuario = require('../models/usuario')



const usuariosGet = async (req = request, res = response) => {

    // const { q, nombre, apikey } = req.query
    const { limite = 5, desde = 0 } = req.query
    const query = { estado: true }


    // const usuarios = await Usuario.find(query)
    //     .skip(Number(desde))
    //     .limit(Number(limite))


    // const total = await Usuario.countDocuments(query)

    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ])

    res.status(200).json({
        total,
        usuarios
    })
}

const usuariosPut = async (req, res) => {

    const id = req.params.id
    const { _id, password, google, correo, ...resto } = req.body

    // TODO validar contra base de datos

    if (password) {
        //encriptar laa contraseña
        const salt = bcryptjs.genSaltSync(10)
        resto.password = bcryptjs.hashSync(password, salt)
    }
    const usuario = await Usuario.findByIdAndUpdate(id, resto)

    res.status(200).json(usuario)
}

const usuariosPost = async (req, res) => {



    const { nombre, correo, password, rol } = req.body
    const usuario = new Usuario({ nombre, correo, password, rol })



    //encriptar laa contraseña
    const salt = bcryptjs.genSaltSync(10)
    usuario.password = bcryptjs.hashSync(password, salt)
    //guardar en DB
    await usuario.save()

    res.status(201).json({
        msg: 'post API',
        usuario
    })
}

const usuariosDelete = async (req, res) => {

    const { id } = req.params

    //fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete(id)

    const usuario = await Usuario.findByIdAndUpdate(id,{estado: false})


    res.json(usuario)
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