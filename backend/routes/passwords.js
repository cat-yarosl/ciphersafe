const express = require('express');
const router = express.Router();
const db = require('../db'); // Import the database configuration

router.get('/', (req, res) => {
  db.all('SELECT id, website, username, password FROM passwords', [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { website, username, password } = req.body;
  db.run('INSERT INTO passwords (website, username, password) VALUES (?, ?, ?)', [website, username, password], function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(201).json({ id: this.lastID, website, username, password });
  });
});

router.delete('/:id', (req, res) => {
  db.run('DELETE FROM passwords WHERE id = ?', req.params.id, function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(204).send();
  });
});

module.exports = router;