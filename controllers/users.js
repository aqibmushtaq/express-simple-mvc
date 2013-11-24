var user = require('../models/user');
module.exports.controller = function(app) {
  
  app.get('/users/login', function(req, res) {
    var myUser = new user();
    res.send('login successfull? ' + myUser.verifyLogin('foo@bar.com', 'foobar'));
  });

  app.get('/users/create', function(req, res) {
    res.send(" page");
  });

  app.get('/users/view', function(req, res) {
    var myUser = new user();
    res.render('users/view', {
      'title': 'User view',
      'user': myUser.getRow()
    });
  });
}
