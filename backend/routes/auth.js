const express = require('express');
const router = express.Router();
const authService = require('../services/authService');
const userService = require('../services/userService');

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  authService.login(username, password, (err, token) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ token });
  });
});

router.post('/logout', (req, res) => {
  const { token } = req.body;

  authService.logout(token, (err) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(204).send();
  });
});

router.post('/register', (req, res) => {
  const { username, password } = req.body;

  userService.createUser(username, password, (err, id) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(201).json({ id, username });
  });
});

module.exports = router;