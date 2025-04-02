const userDal = require('../dal/userDal');
const bcrypt = require('bcrypt');

const createUser = (username, password, callback) => {
  // Hash the password before storing it
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      callback(err);
      return;
    }

    userDal.createUser(username, hashedPassword, (err, id) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, id);
    });
  });
};

const getUser = (username, callback) => {
  userDal.getUser(username, callback);
}

module.exports = {
  createUser,
  getUser
};