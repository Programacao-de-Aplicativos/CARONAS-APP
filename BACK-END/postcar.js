'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class PostCar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PostCar.belongsTo(models.User);
      PostCar.hasOne(models.Veiculo);
    }
  }


  //const PostCar = sequelize.define('PostCar', {
 PostCar.init({
    veiculo: DataTypes.STRING,
    horario: DataTypes.TIME,
    vagas: DataTypes.INTEGER,
    estacionamento: DataTypes.STRING,
    destino: DataTypes.STRING,
    flag: DataTypes.INTEGER,
    userpRa: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PostCar',
  });

  return PostCar;
};