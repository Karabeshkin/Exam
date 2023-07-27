const router = require('express').Router();
const FormUpdateChirp = require('../../components/FormUpdateChirp');
const { Chirp } = require('../../db/models');

router.get('/:chirpId', async (req, res) => {
  try {
    const { chirpId } = req.params;
    const chirp = await Chirp.findOne({ where: { id: chirpId } });
    res.send(res.renderComponent(FormUpdateChirp, { chirp, title: 'Form update chirp' }));
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
