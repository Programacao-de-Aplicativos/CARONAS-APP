'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.PostCar);
      User.hasMany(models.Veiculo);
    }
  }
  User.init({
    RA: DataTypes.STRING,
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    classificacao: DataTypes.INTEGER,
    imagem: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};