'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Veiculo.belongsTo(models.User);
      Veiculo.belongsTo(models.PostCar);
    }
  }
  Veiculo.init({
    modelo: DataTypes.STRING,
    placa: DataTypes.STRING,
    cor: DataTypes.STRING,
    imagemCar: DataTypes.STRING,
    userRa: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Veiculo',
  });
  return Veiculo;
};