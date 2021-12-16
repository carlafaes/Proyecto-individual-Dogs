const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV1,
      allowNull:false,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight_min:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    weight_max:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    height_min:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    height_max:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    life_span:{
      type:DataTypes.STRING,
    },
    image:{
      type:DataTypes.STRING,
    },
  });
};
