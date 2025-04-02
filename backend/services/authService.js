const userService = require('./userService');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = (username, password, callback) => {
  userService.getUser(username, (err, user) => {
    if (err) {
      callback(err);
      return;
    }

    if (!user) {
      callback(new Error('User not found'));
      return;
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        callback(err);
        return;
      }

      if (!result) {
        callback(new Error('Invalid password'));
        return;
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      callback(null, { "userId": user.id, "token": token });
    });
  });
};

module.exports = {
  login,
};