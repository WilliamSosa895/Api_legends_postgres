'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Legends', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      last_club: {
        type: Sequelize.STRING
      },
      titles_count: {
        type: Sequelize.INTEGER
      },
      goals_count: {
        type: Sequelize.INTEGER
      },
      ballon_dors: {
        type: Sequelize.INTEGER
      },
      world_cups: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Legends');
  }
};

