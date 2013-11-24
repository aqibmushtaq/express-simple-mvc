function User() {
  
  var row = {
    'id': 1,
    'name': 'Aqib',
    'email': 'foo@bar.com',
    'password': 'foobar'
  };

  this.getRow = function() {
    return row;
  };

  this.getField = function(field) {
    return row[field];
  };

  this.verifyLogin = function(email, password) {
    if(email == row['email'] && password == row['password'])
      return true;
    return false;
  };
};

module.exports = User;
