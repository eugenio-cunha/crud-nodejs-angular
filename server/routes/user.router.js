'use strict'

const express = require( 'express' )
const router = express.Router()
const userCtrl = require( '../controllers/user.controller' )

/* ALL */ 
router.all( '*', ( req, res, next ) => {
  res.setHeader( 'Access-Control-Allow-Origin', '*' )
  res.setHeader( 'Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS' )
  res.setHeader( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' )
  next()
} )

/* POST user insert*/ 
router.post( '/', ( req, res, next ) => userCtrl.create( req, res, next ) )

/* GET users listing. */
router.get( '/', ( req, res, next ) => userCtrl.read( req, res, next ) )

/* GET load user*/ 
router.get( '/:id', ( req, res, next ) => userCtrl.load( req, res, next ) )

/* PUT user update*/
router.put( '/:id', ( req, res, next ) => userCtrl.update( req, res, next ) )

/* DELETE user delete*/
router.delete( '/:id', ( req, res, next ) => userCtrl.delete( req, res, next ) )

module.exports = router
