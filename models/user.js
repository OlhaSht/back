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
      // define association here
    }
  }
  User.init({
    login: {
      allowNull: false,
      type:DataTypes.STRING(64),
      validate: {
        notNull: true,
        notEmpty: true,
      },},
      
    email: {
      unique: true,
        allowNull:false,
        type:DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty:true,
          isEmail: true,
        },},
        
    password: {
      allowNull:false,
      field:"password_hash",
      type:DataTypes.TEXT,
      validate:{
        notNull: true,
        notEmpty: true,
      },
      set(v){
      this.setDataValue('password', 'hash password')
    }
    },

    imgPath: {
      field:"img_path",
      type:DataTypes.TEXT,
      },
      
  }, {
    sequelize,
    modelName: 'User',
    tableName:'users',
    undescored: true
  });
  return User;
};