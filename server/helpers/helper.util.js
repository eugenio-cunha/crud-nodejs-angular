'use strict'

/**
 * Normalize a port into a number, string, or false.
 */

const normalizePort  = ( value ) => {
  const port = parseInt( value, 10 )

  if ( Number.isNaN( port ) ) {
    return value
  }

  if ( port >= 0 ) {
    return port
  }

  return false
}

module.exports = {
  normalizePort
}