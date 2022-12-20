'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Veiculos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userRa: {
        type: Sequelize.INTEGER,
        references:{
          model: 'users',
          key: 'ra'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      postId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'postcars',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      modelo: {
        type: Sequelize.STRING
      },
      placa: {
        type: Sequelize.STRING
      },
      cor: {
        type: Sequelize.STRING
      },
      imagemCar: {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Veiculos');
  }
};