const express = require('express');

const routes = express.Router();
const users = [
  {
    id: 1,
    name: 'admin',
    email: 'admin@auth.com',
    password: 'admin'
  },
  {
    id: 2,
    name: 'Nader',
    email: 'naderalifares@hotmail.com',
    password: 'Nader18!'
  }
]

routes.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    res.status(200).json(user);
  }

 return res.status(401).json({message: 'Invalid credentials. Please verify your username and password.'});
});

module.exports = routes;