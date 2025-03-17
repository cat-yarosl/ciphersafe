const express = require('express');
const router = express.Router();
const passwordsService = require('../services/passwordService');

router.get('/', (req, res) => {
  passwordsService.getAllPasswords((err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { website, username, password } = req.body;
  
  passwordsService.createPassword(website, username, password, (err, id) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(201).json({ id, website, username, password });
  });
});

router.delete('/:id', (req, res) => {
  passwordsService.deletePassword(req.params.id, (err) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(204).send();
  });
});

module.exports = router;