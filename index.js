const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', controllers.getAll);

app.get('/talker/:id', controllers.getById);

app.post('/login', middlewares.authLogin, controllers.getToken);

app.post('/talker', controllers.createTalker);

app.listen(PORT, () => {
  console.log('Online');
});
