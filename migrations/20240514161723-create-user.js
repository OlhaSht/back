'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      login: {
        type: Sequelize.STRING(64),
        allowNull:false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull:false,
      },
      password: {
        field:"password_hash",
        type: Sequelize.TEXT,
        allowNull:false,
      },
      imgPath: {
        field:"img_path",
        type: Sequelize.TEXT
      },
      createdAt: {
        field:"created_at",
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field:"updated_at",
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};