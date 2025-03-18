const db = require('../db');

const createUser = (username, password, callback) => {
  db.run(
    'INSERT INTO users (username, password) VALUES (?, ?)', 
    [username, password], 
    function(err) {
      callback(err, this ? this.lastID : null);
  });
}

const getUser = (username, callback) => {
  db.get(
    'SELECT id, username, password FROM users WHERE username = ?', 
    [username], 
    callback
  );
}

module.exports = {
  createUser,
  getUser
};