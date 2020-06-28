const https = require('https');
const configure = require('./config');

/**
 * Class HttpCreate - has methods to make http requests
 */
class HttpCreate {
  /**
   * HttpCreate constructor
   * @param {void}
   * @var {string} this._baseURL
   * @var {string} this._method
   * @var {Object} this._data
   */
  constructor() {
    this._path = null;
    this._method = null;
    this._data = null;
  }

  /**
   * Get the value of path
   * @returns this._path;
   */
  getPath() {
    return this._path;
  }

  /**
   * Set the value of path
   * @param {string} path
   */
  setPath(path) {
    this._path = path;
  }

  /**
   * Get the value of method
   * @returns this._method;
   */
  getMethod() {
    return this._method;
  }

  /**
   * Set the value of method
   * @param {string} method
   */
  setMethod(method) {
    this._method = method;
  }

  /**
   * Get the value of data
   * @returns this._data;
   */
  getData() {
    return this._data;
  }

  /**
   * Set the value of data
   * @param {string} data
   */
  setData(data) {
    this._data = data;
  }

  /**
   * Method httpRequest
   * @param {string} path
   * @param {string} method
   * @param {Object} data
   * @param {Function} cb  callback(error, response)
   */
  httpRequest(path, method, data, cb) {
    this.cb = cb;
    this.setPath(path);
    this.setMethod(method);
    this.setData(data);

    configure.path = this.getPath();
    configure.method = this.getMethod();
    const paymentData = JSON.stringify(this.getData());

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

    if (this.getMethod() === 'POST') {
      // only write the data when the request method is a POST
      req.write(paymentData);
    }
    req.end();
  }
}

module.exports = {
  HttpCreate: new HttpCreate(),
};
