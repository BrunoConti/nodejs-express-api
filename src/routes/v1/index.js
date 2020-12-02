const usersRoutes = require('./usersRoute');
const productsRoute = require('./productsRoute');

module.exports = (app) => {
  app.use('/api/v1/users', usersRoutes);
  app.use('/api/v1/products', productsRoute);
};
