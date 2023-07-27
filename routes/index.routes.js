const router = require('express').Router();

const mainRouter = require('./views/main.routes');
const authRoute = require('./views/auth.routes');
const authApiRoute = require('./api/auth.routes');
const chirpUpdate = require('./views/animalUpdate.routes');
const chirpsApiRoute = require('./api/chirps.routes');
const likesApiRoute = require('./api/likes.routes');

router.use('/', mainRouter);
router.use('/api/auth', authApiRoute);
router.use('/auth', authRoute);
router.use('/form-update-chirp', chirpUpdate);
router.use('/api/chirps', chirpsApiRoute);
router.use('/api/likes', likesApiRoute);

module.exports = router;
