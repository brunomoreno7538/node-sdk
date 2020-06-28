const client = require('../core/client');
/**
 *
 * @param {Object} data        data about the user
 * @param {string} X_API_KEY   api key
 * @param {string} X_TOKEN_KEY token key
 * @param {Function} callback  callback function
 */

class CheckOut {
  constructor() {
    this._baseURL = null;
    this._method = 'POST';
  }

  TransparentCheckout(data, cb) {
    this._baseURL = '/v1.1/checkout';
    this._httpRequest = new client.HttpCreate(this._baseURL, this._method, data, cb);
    this._httpRequest.httpRequestPost();
  }

  RedirectCheckout(data, cb) {
    this._baseURL = '/v1.1/checkout/transparent';
    this._httpRequest = new client.HttpCreate(this._baseURL, this._method, data, cb);
    this._httpRequest.httpRequestPost();
  }
}

module.exports = {
  CheckOut: new CheckOut(),
};
