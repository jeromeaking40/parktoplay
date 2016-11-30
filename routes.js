var allRoutes = require('./controllers/routemethods');

module.exports = function(app){
  //SEARCH ROUTE
  app.get('/search', allRoutes.search);

  //VENUE ROUTE
  app.get('/venues', allRoutes.venues);

};
