const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const { loginRouter, talkersRouter } = require('./routes');

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', talkersRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log('Online');
});
