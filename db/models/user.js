const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Like, Chirp }) {
      this.hasMany(Chirp, { foreignKey: 'user_id' });
      this.hasMany(Like, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
