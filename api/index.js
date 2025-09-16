const express = require('express');
const cors = require('cors');
const usersRouter = require('./users');
const serverless = require('serverless-http');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/users', usersRouter);

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

module.exports.handler = serverless(app);
