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

class HttpCreate {
  constructor(path, method, data, cb) {
    this.path = path;
    this.method = method;
    this.data = data;
    this.cb = cb;
  }

  httpRequestPost() {
    configure.path = this.path;
    configure.method = this.method;
    const paymentData = JSON.stringify(this.data);

    const req = https
      .request(configure, (res) => {
        let response = '';

        res.on('data', (chunk) => {
          response += chunk;
        });

        res.on('end', () => {
          this.cb(null, JSON.parse(response));
        });
      })
      .on('error', (err) => {
        this.cb(err, null);
      });
    req.write(paymentData);
    req.end();
  }
}

module.exports = {
  HttpCreate,
};
