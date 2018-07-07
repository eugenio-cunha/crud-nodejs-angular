'use strict'

const mongoose = require( 'mongoose' )
const uri = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`

mongoose.connect( uri )

mongoose.connection.on( 'connected', () => {
  console.log( 'MONGOOSE STATUS: CONNECTED URL:', uri )
})

mongoose.connection.on( 'error', (error) => {
  console.log( 'MONGOOSE STATUS: ERROR ', error )
})

mongoose.connection.on( 'disconnected', () => {
  console.log( 'MONGOOSE STATUS: DISCONNECTED' )
})

mongoose.connection.on( 'open', () => {
  console.log( 'MONGOOSE STATUS: OPEN' )
})

process.on( 'SIGINT', () => {
  mongoose.connection.close( () => {
    console.log( 'MONGOOSE STATUS: CLOSE' )
    process.exit( 0 )
  })
})
