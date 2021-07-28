const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const { DB, PORT } = require('./config');

const app = express();

// Setup middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);
require('./services/passport');

mongoose.connect(DB,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

app.listen(PORT, () => console.log(`Connected on Port: ${PORT}`));
