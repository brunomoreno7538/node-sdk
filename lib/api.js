const https = require('https');
const configure = require('./config');

module.exports = function (path, method, apiKey, apiToken, data, cb) {
  if (data.mode === 'SANDBOX') {
    configure.hostname = 'apisandbox.paymee.com.br';
  } else if (data.mode === 'ENVIROMENT') {
    configure.hostname = 'api.paymee.com.br';
  }
  configure.path = path;
  configure.method = method;
  configure.headers['x-api-token'] = apiToken;
  configure.headers['x-api-key'] = apiKey;
  const dados = JSON.stringify(data);
  const req = https
    .request(configure, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        cb(false, data);
      });
    })
    .on('error', (err) => {
      cb(err, false);
      throw err;
    });

  req.write(dados);
  req.end();
};
