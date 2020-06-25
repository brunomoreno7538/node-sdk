const https = require('https');
const configure = require('./config');

/**
 *
 * @param {string} path     hostname
 * @param {string} method   HTTP method
 * @param {string} apiKey   api key
 * @param {string} apiToken api token
 * @param {object} data     data about the transaction
 * @param {function} cb     callback
 */
module.exports = function httpCreate(path, method, apiKey, apiToken, data, cb) {
  if (data.mode === 'LIVE' || data.mode === 'SANDBOX') {
    if (data.mode === 'SANDBOX') {
      configure.hostname = 'apisandbox.paymee.com.br';
    }
    if (data.mode === 'LIVE') {
      configure.hostname = 'api.paymee.com.br';
    }
  } else {
    cb('Invalid enviroment mode', false);
  }

  if (apiToken === undefined || apiToken === null) {
    cb('Token API must not be empty!', false);
  } else if (apiKey === undefined || apiKey === null) {
    cb('Token API must not be empty!', false);
  }
  configure.path = path;
  configure.method = method;
  configure.headers['x-api-key'] = apiKey;
  configure.headers['x-api-token'] = apiToken;

  const paymentData = JSON.stringify(data);

  const req = https
    .request(configure, (res) => {
      let response = '';
      res.on('data', (chunk) => {
        response += chunk;
      });
      res.on('end', () => {
        cb(false, JSON.parse(response));
      });
    })
    .on('error', (err) => {
      console.log(`problem with request: ${err.message}`);
      cb(err, false);
    });

  req.write(paymentData);
  req.end();
};
