const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Chirp extends Model {
    static associate({ User, Like }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Like, { foreignKey: 'chirp_id' });
    }
  }
  Chirp.init(
    {
      image: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Chirp',
    },
  );
  return Chirp;
};
