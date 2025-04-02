const express = require('express');
const router = express.Router();
const passwordService = require('../services/passwordService');

router.get('/', (req, res) => {
  const userId  = req.query.userId;
  
  passwordService.getAllPasswords(userId, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { userId, website, username, password } = req.body;
  
  passwordService.createPassword(userId, website, username, password, (err, id) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(201).json({ id, website, username, password });
  });
});

router.delete('/:id', (req, res) => {
  passwordService.deletePassword(req.params.id, (err) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(204).send();
  });
});

module.exports = router;