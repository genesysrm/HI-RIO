'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PontosTuristicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PontosTuristicos.init({
    nome_lugar: DataTypes.STRING,
    endereco_lugar: DataTypes.STRING,
    valor_lugar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PontosTuristicos',
  });
  return PontosTuristicos;
};