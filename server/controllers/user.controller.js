'use strict'

const User = require( '../models/user.model' )

/**
* Cria um novo usuário
* @property {string} req.body.firstName - Primeiro nome do usuário
* @property {string} req.body.lastName - Ultimo nome do usuário
* @property {string} req.body.email -E-mail do usuário
* @return {User}
*/
async function create ( req, res, next ) {
  try {
    const user = new User( req.body )
    res.json( await user.save( user ) )
  } catch ( error ) {
    console.error( "ERROR function create user.controller", error )
  }
}

/**
* Atualiza um usuário existente
* @property {string} req.body.firstName - Primeiro nome do usuário
* @property {string} req.body.lastName - Ultimo nome do usuário
* @property {string} req.body.email -E-mail do usuário
* @return {User}
*/
async function update ( req, res, next ) {
  try {
    let id = req.body._id
    const user = new User( req.body )
    res.json( await User.findByIdAndUpdate( id, user, { new: true } ) )
  } catch ( error ) {
    console.error( "ERROR function update user.controller: ", error)
    next(error)
  }
}

/**
* Lista de usuários
* @param {number} skip - Número de usuários a ser pulados
* @param {number} limit - Número limite de usuários 
* @retun {User[]}
**/
async function read ( req, res, next ) {
  try {
    const { limit = 50, skip = 0 } = req.query
    res.json( await User.list( { limit, skip } ) )
  } catch (  error ) {
    console.error( "ERROR fucntion read user.controller: ", error )
    next(error)
  }
}

/**
* Delete um usuário
* @returns {User}
*/ 
async function _delete ( req, res, next ) {
  try {
    let id = req.params.id
    res.json( await User.findOneAndDelete( { _id: id } ) )
  } catch (  error ) {
    console.error( "ERROR function delete user.controller: ", error )
    next( error )
  }
}

/**
* Recupera um unico usuário
* @returns {User}
*/
async function load ( req, res, next ) {
  try {
    let id = req.params.id
    res.json( await User.get( id ) )
  } catch ( error ) {
    console.error( "ERROR function load user.controller: ", error )
    next(error)
  }
} 

module.exports = {
  create: create,
  read: read,
  update: update,
  delete: _delete,
  load: load
}