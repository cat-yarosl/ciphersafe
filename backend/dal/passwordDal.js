const db = require('../db');

const getAllPasswords = (user_id, callback) => {
  db.all(
    'SELECT id, website, username, password FROM passwords WHERE user_id = ?', 
    [user_id], 
    callback
  );
};

const createPassword = (user_id, website, username, password, callback) => {
  db.run(
    'INSERT INTO passwords (user_id, website, username, password) VALUES (?, ?, ?, ?)', 
    [user_id ,website, username, password], 
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