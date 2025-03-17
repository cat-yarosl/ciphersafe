const db = require('../db');

const getAllPasswords = (callback) => {
  db.all(
    'SELECT id, website, username, password FROM passwords', 
    [], 
    callback
  );
};

const createPassword = (website, username, password, callback) => {
  db.run(
    'INSERT INTO passwords (website, username, password) VALUES (?, ?, ?)', 
    [website, username, password], 
    function(err) {
      callback(err, this ? this.lastID : null);
  });
};

const deletePassword = (id, callback) => {
  db.run(
    'DELETE FROM passwords WHERE id = ?', 
    id, 
    callback
  );
};

module.exports = {
  getAllPasswords,
  createPassword,
  deletePassword
};