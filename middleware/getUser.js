const { User } = require('../db/models');

async function getUser(req, res, next) {
  if (req.session.userId) {
    const user = await User.findOne({ where: { id: req.session.userId } });
    // console.log(user, '0000000000000000');
    if (user) {
      res.locals.user = { id: user.id, name: user.name };
    }
  }
  next();
}
module.exports = getUser;

// res.app.locals.user = { name: 'Alex' }; // существует пока мы не перезагрузили сервер
// res.locals.user = { name: 'Alex' };
// когда записываем в res.app.locals, он работает по всему приложению.
// В объекте res начинает существовать user

// res.locals.user = { name: 'Alex' }; // исчезает после отправки ответа
// то есть живет недолго, отдает ответ и умирает, можно перезаполнять объект res
