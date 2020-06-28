const client = require('../core/client');

/**
 * Class CheckOut - has checkout methods
 */
class CheckOut {
  /**
   * CheckOut constructor
   * @param {void}
   * @var {string} this.baseURL
   * @var {string} this.method
   */
  constructor() {
    this.baseURL = null;
    this.method = 'POST';
  }

  /**
   * Method TransparentCheckout
   * @param {Object} data
   * @var {Object} this.data
   */
  TransparentCheckout(data) {
    this.baseURL = '/v1.1/checkout';
    this.data = data;
  }

  /**
   * Method RedirectCheckout
   * @param {Object} data
   * @var {Object} this.data
   */
  RedirectCheckout(data) {
    this.baseURL = '/v1.1/checkout/transparent';
    this.data = data;
  }

  /**
   * Method Execute - execute the http request
   * @param {Function} cb callback(error, response)
   */
  Execute(cb) {
    this.cb = cb;
    client.HttpCreate.httpRequest(this.baseURL, this.method, this.data, this.cb);
  }
}

module.exports = {
  CheckOut: new CheckOut(), // exports the instantiated class
};
