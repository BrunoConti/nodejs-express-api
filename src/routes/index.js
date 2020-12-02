const { countries, languages } = require('countries-list');


const routes = (app) => {
  app.get('/', (request, response) => {
    response.status(200).send('HELLO');
  });

  app.get('/info', (request, response) => {
    info('HOLA INFO NODEMON');
    response.send('HELLO INFO NODEMON');
  });

  app.get('/country', (request, response) => {
    response.json(countries[request.query.code]);
  });

  app.get('/language/:lang', (request, response) => {
    console.log('request.params', request.params);
    const lang = languages[request.params.lang];
    if (lang) {
      response.json({ status: 'OK', data: lang });
    } else {
      response.status(404).json({
        status: 'NOT_FOUND',
        message: `language ${request.params.lang} not found`,
      });
    }
  });

  app.get('*', (request, response) => {
    error('HOLA ERROR NODE');
    response.status(404).send('NOT FOUND');
  });
};
module.exports = routes;
