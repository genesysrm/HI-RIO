'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ListaVisita', {
      id_lista: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_lugar: {
        type: Sequelize.INTEGER
      },
      nome_lista: {
        type: Sequelize.STRING
      },
      visitou_lista: {
        type: Sequelize.BOOLEAN
      },
      comentarios_lista: {
        type: Sequelize.STRING
      },
      valor_lista: {
        type: Sequelize.INTEGER
      },
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ListaVisita');
  }
};