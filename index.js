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

// app.get('/talker/search', middlewares.authToken, controllers.searchTalker);

// app.get('/talker', controllers.getAll);

// app.get('/talker/:id', controllers.getById);

// app.post('/login', middlewares.authLogin, controllers.getToken);

// app.post('/talker', middlewares.authCadaster, controllers.createTalker);

// app.put('/talker/:id', middlewares.authCadaster, controllers.updateTalker);

// app.delete('/talker/:id', middlewares.authToken, controllers.deleteTalker);

app.listen(PORT, () => {
  console.log('Online');
});
