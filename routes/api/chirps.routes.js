const router = require('express').Router();
const { Chirp } = require('../../db/models');
const ChirpItem = require('../../components/ChirpItem');

router.get('/', async (req, res) => {
  try {
    const chirps = await Chirp.findAll({ raw: true, exclude: ['user_id'] });
    res.json(chirps);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/:chirpId', async (req, res) => {
  try {
    const chirp = await Chirp.findOne({ raw: true, where: { id: req.params.chirpId } });
    res.json(chirp);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      description, image,
    } = req.body;
    if (description && image) {
      const newChirp = await Chirp.create({
        description, image, user_id: req.session.userId, date: new Date(),
      });
      res.json({ message: 'success', html: res.renderComponent(ChirpItem, { chirp: newChirp }, { htmlOnly: true }) });
    } else {
      res.json({ message: 'Заполните все поля' });
    }
    
  } catch ({ message }) {
    res.send({ message });
  }
});

router.delete('/:chirplId', async (req, res) => {
  try {
    const { chirplId } = req.params;
    const result = await Chirp.destroy({ where: { id: chirplId, user_id: req.session.userId } });
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/:chirpId', async (req, res) => {
  try {
    const { chirpId } = req.params;
    const {
      description, image,
    } = req.body;
    const chirp = await Chirp.update(
      {
        description, image,
      },
      {
        where: { id: chirpId, user_id: req.session.userId },
      },
    );
    res.json(chirp);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
