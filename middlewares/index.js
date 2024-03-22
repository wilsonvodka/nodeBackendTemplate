const  validarCampos  = require('../middlewares/validar-campos')
const  validarJWt  = require('../middlewares/validar-jwt')
const validaRoles = require('../middlewares/validar-roles')

module.exports = {
    ...validarCampos,
    ...validarJWt,
    ...validaRoles,
}
