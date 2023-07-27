/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const likesData = [
      { user_id: 1, chirp_id: 1 },
      { user_id: 1, chirp_id: 4 },
      { user_id: 2, chirp_id: 3 },
      { user_id: 2, chirp_id: 5 },
      { user_id: 3, chirp_id: 2 },
      { user_id: 3, chirp_id: 7 },
      { user_id: 4, chirp_id: 1 },
      { user_id: 4, chirp_id: 2 },
      { user_id: 5, chirp_id: 3 },
      { user_id: 5, chirp_id: 4 },
    ];
    const likes = likesData.map((like) => ({
      ...like,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Likes', likes);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Likes');
  },
};
