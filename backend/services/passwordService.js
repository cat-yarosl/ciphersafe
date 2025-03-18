const passwordsDal = require('../dal/passwordDal');

const getAllPasswords = (user_id, callback) => {
  passwordsDal.getAllPasswords(user_id, callback);
};

const createPassword = (user_id, website, username, password, callback) => {
  passwordsDal.createPassword(user_id, website, username, password, callback);
};

const deletePassword = (id, callback) => {
  passwordsDal.deletePassword(id, callback);
};

module.exports = {
  getAllPasswords,
  createPassword,
  deletePassword
};