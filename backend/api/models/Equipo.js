/**
 * Equipo.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:'string',
      required:true
    },
    liga:{
      type:'string',
      required:true
    },
    fechaCreacion:{
      type:'string',
      required:true
    },
    numeroCopas:{
      type:'number',
      required:true
    },
    urlImagen:{
      type:'string',
      required:true
    },

    jugadores: {
      collection: 'jugador',
      via: 'equipoIDFK'
    }
  }
};
