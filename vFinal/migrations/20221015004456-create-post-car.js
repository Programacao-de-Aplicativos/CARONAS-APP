'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PostCars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userpRa: {
        type: Sequelize.INTEGER,
        references:{
          model: 'users',
          key: 'ra'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      veiculo: {
        type: Sequelize.STRING
      },
      horario: {
        type: Sequelize.TIME
      },
      vagas: {
        type: Sequelize.INTEGER
      },
      estacionamento: {
        type: Sequelize.STRING
      },
      destino: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      UserId: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PostCars');
  }
};