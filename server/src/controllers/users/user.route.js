const userController = require('./user.controller');

module.exports = (router) => {
  router.post('/register', userController.createUser);
  router.post('/authenticate', userController.loginUser)
  return router;
};
