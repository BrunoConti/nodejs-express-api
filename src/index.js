const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const routesV1 = require('./routes/v1');

app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

routesV1(app);

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected to MONGO DB');
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Mongo error', err);
  });
