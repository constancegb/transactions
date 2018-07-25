const createPorteProxy = require('./proxy');
const config = require('../../config');

module.exports = app => {
  const porteUrl = config.services.porte.url;
  const porteProxy = createPorteProxy(porteUrl, config.proxy);

  app.get('/api', porteProxy);

};
