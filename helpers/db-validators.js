const Role = require('../models/role')
const Usuario = require('../models/usuario')

const esRoleValido = async (rol = '') => {
    const existeRol = await Role.findOne({ rol })

    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la DB`)
    }
}

const emailExiste = async (correo = '') => {
    //verifivar si el correo existe
    const existeEmail = await Usuario.findOne({ correo })
    if (existeEmail) {
        throw new Error(`El correo ${correo} ya esta registrado`)
    }

}
const existeUsuarioPorId = async ( id ) => {
    //verifivar si el correo existe
    const existeUsuario = await Usuario.findById(id)
    if (!existeUsuario) {
        throw new Error(`El id no existe ${id}`)
    }

}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId

}