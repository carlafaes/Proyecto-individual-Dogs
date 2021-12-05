const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight:{
      type:DataTypes.STRING,
    },
    height:{
      type:DataTypes.STRING,
    },
    bred_for:{
      type:DataTypes.STRING,
    },
    breed_group:{
      type:DataTypes.STRING,

    },
    life_span:{
      type:DataTypes.STRING,
    },
    temperament:{
      type:DataTypes.STRING,
    },
    origin:{
      type:DataTypes.STRING,
    },
    image:{
      type:DataTypes.STRING,
    },
  });
};
