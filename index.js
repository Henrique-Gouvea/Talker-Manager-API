const express = require('express');
const bodyParser = require('body-parser');
// const req = require('express/lib/request');
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

app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});

app.get('/talker', controllers.getAll);

app.get('/talker/:id', controllers.getById);

app.post('/login', middlewares.authLogin, controllers.getToken);

// app.post('/talker', (req, _res) => console.log(req.body), controllers.createTalker);

app.post('/talker', middlewares.authCadaster, controllers.createTalker);

app.listen(PORT, () => {
  console.log('Online');
});
