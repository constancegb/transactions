const HTTPStatus = require('http-status-codes');
const logger = require('@skwirrel-mem/skwirrel-logger');
const httpProxy = require('http-proxy');

module.exports = (url, proxyConfig) => {
  const proxy = httpProxy.createProxyServer({
    target: url,
    changeOrigin: proxyConfig.origin
  });

  proxy.on('proxyRes', (proxyRes, req) => {
    logger.info({ url: req.url }, '[Web#proxy] Forwarding response to client side');
  });

  // from https://github.com/nodejitsu/node-http-proxy#listening-for-proxy-events
  proxy.on('error', (err, req, res) => {
    logger.info({ err }, '[Web#proxy] An error occurred while forwarding request to iam');

    res.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR);
  });

  return (req, res) => {
    logger.info({ url: req.url }, '[Web#proxy] Forwarding request to Porte API');

    proxy.web(req, res);
  };
};
