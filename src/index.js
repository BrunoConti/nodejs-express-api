const express = require('express');

const routes = require('./routes')

app = express();

routes(app)

app.listen(4000, () => {
  console.log('Server running on 4000');
});
