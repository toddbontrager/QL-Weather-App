var controller = require('./controllers.js');

module.exports = function(app) {
  app.route('/getByZip')
    .get(controller.getByZip);

  app.route('/getByName')
    .get(controller.getByName);
};
