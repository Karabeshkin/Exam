const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ User, Chirp }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Chirp, { foreignKey: 'chirp_id' });
    }
  }
  Like.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      chirp_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Chirps',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Like',
    },
  );
  return Like;
};
