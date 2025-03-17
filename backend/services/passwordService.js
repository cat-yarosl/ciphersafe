const passwordsDal = require('../dal/passwordDal');

const getAllPasswords = (callback) => {
  passwordsDal.getAllPasswords(callback);
};

const createPassword = (website, username, password, callback) => {
  passwordsDal.createPassword(website, username, password, callback);
};

const deletePassword = (id, callback) => {
  passwordsDal.deletePassword(id, callback);
};

module.exports = {
  getAllPasswords,
  createPassword,
  deletePassword
};