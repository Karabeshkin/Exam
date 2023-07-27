const router = require('express').Router();
const MainPage = require('../../components/MainPage');
// const ChirpsList = require('../../components/ChirpsList');
const { Chirp, Like } = require('../../db/models');
const ChirpPage = require('../../components/ChirpPage');



router.get('/', async (req, res) => {

  try {
    const chirps = await Chirp.findAll({ order: [['id', 'ASC']], include: { model: Like } });
    res.send(res.renderComponent(MainPage, { chirps }));
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/:chirplId', async (req, res) => {
  try {
    const { chirplId } = req.params;
    const chirp = await Chirp.findOne({ where: { id: chirplId } });
    res.send(res.renderComponent(ChirpPage, { title: 'Chirp Page', chirp }));
  } catch ({ message }) {
    res.send({ message });
  }
});



module.exports = router;
