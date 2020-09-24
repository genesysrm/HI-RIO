'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('ListaVisita', [{
    id_lugar: '9',
    nome_lista: 'Corcovado',
    visitou_lista: true,
    comentarios_lista:"Adorei a visita no Corcovado, o Cristo Redentor é maravilhoso",
    valor_lista: 180.00
  }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
