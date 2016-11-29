var allRoutes = require('./controllers/routemethods');

module.exports = function(app){
  //SEARCH ROUTE
  app.get('/search', allRoutes.search);

  app.get('/venues', allRoutes.venues);

};
