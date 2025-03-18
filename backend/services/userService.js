const userDal = require('../dal/userDal');

const createUser = (username, password, callback) => {
  userDal.createUser(username, password, callback);
};

const getUser = (username, callback) => {
  userDal.getUser(username, callback);
}

module.exports = {
  createUser,
  getUser
};