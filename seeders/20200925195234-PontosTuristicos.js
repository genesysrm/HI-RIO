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
   await queryInterface.bulkInsert('PontosTuristicos', [{
    nome_lugar: 'Jardim Botânico',
    endereco_lugar: 'Rua Jardim Botânico, 1008. Jardim Botânico - CEP 22460-000',
    valor_lugar:80,
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    nome_lugar: 'Museu do Amanhã',
    endereco_lugar: 'Praça Mauá, 1 - Centro, Rio de Janeiro - RJ, 20081-240',
    valor_lugar:60,
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    nome_lugar: 'Aqua Rio ',
    endereco_lugar: 'Praça Muhammad Ali - Via Binário do Porto, s/n - Gamboa, Rio de Janeiro - RJ, 20220-360',
    valor_lugar:150,
    createdAt: new Date(),
    updatedAt: new Date()

   },{
    nome_lugar: 'Corcovado',
    endereco_lugar: 'Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ',
    valor_lugar:160,
    createdAt: new Date(),
    updatedAt: new Date()

   },{
    nome_lugar: 'Pão de Açúcar',
    endereco_lugar: 'Av. Pasteur, 520 - Urca, Rio de Janeiro - RJ, 22290-240',
    valor_lugar:100,
    createdAt: new Date(),
    updatedAt: new Date()

   },{
    nome_lugar: 'Rio Star',
    endereco_lugar: 'Av. Rodrigues Alves, 455 - Santo Cristo, Rio de Janeiro - RJ, 20220-360',
    valor_lugar:120,
    createdAt: new Date(),
    updatedAt: new Date()

   },{
    nome_lugar: 'Sambódromo Marquês Sapucaí',
    endereco_lugar: 'R. Marquês de Sapucaí - Santo Cristo, Rio de Janeiro - RJ, 20220-007',
    valor_lugar:80,
    createdAt: new Date(),
    updatedAt: new Date()

   },{
    nome_lugar: 'Estádio Maracanã',
    endereco_lugar: 'Av. Pres. Castelo Branco, Portão 3 - Maracanã, Rio de Janeiro - RJ, 20271-130',
    valor_lugar:80,
    createdAt: new Date(),
    updatedAt: new Date()

   },{
    nome_lugar: 'Bio Parque do Rio',
    endereco_lugar: 'Parque da Quinta da Boa Vista S/N - São Cristóvão, Rio de Janeiro, 20940-040',
    valor_lugar:70,
    createdAt: new Date(),
    updatedAt: new Date()
   },{

    nome_lugar: 'Forte de Copacabana',
    endereco_lugar: 'Praça Coronel Eugênio Franco, 1, Posto 6 - Copacabana, Rio de Janeiro - RJ, 22070-020',
    valor_lugar:25,
    createdAt: new Date(),
    updatedAt: new Date() 
   
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
