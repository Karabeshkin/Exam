const router = require('express').Router();
const { Like } = require('../../db/models');

router.put('/:chirpId', async (req, res) => {
  try {
    if (req.session.userId) {
      const like = await Like.findOne({ where: { chirp_id: req.params.chirpId, user_id: req.session.userId } });
      if (like) {
        await Like.destroy({ where: { chirp_id: req.params.chirpId, user_id: req.session.userId } });
        res.json({ message: 'dislike' });
      } else {
        await Like.create({ user_id: req.session.userId, chirp_id: req.params.chirpId });
        res.json({ message: 'like' });
      }
    }
    // res.json({ message: 'проверка лайков' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
