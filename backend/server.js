const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let passwords = [];

app.get('/passwords', (req, res) => {
  res.json(passwords);
});

app.post('/passwords', (req, res) => {
  const password = { id: Date.now(), password: req.body.password };
  passwords.push(password);
  res.status(201).json(password);
});

app.delete('/passwords/:id', (req, res) => {
  passwords = passwords.filter(password => password.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Password manager backend listening at http://localhost:${port}`);
});
