const client = require('../core/client');

/**
 * Class Query - has query methods
 */
class Query {
  /**
   * Query constructor
   * @param {void}
   * @var {string} this.baseURL
   * @var {string} this.method
   */
  constructor() {
    this.baseURL = null;
    this.method = 'GET';
  }

  /**
   * QueryTransaction method
   * @param {Object} data
   * @var {Object} this.data
   */
  QueryTransaction(data) {
    this.baseURL = `/v1.1/transactions/${data.uuid}`;
    this.data = data;
  }

  /**
   * QueryBalance method
   * @param {void}
   * @var {Object} this.data
   */
  QueryBalance() {
    this.baseURL = '/v1.1/balance';
    this.data = null;
  }

  /**
   * QueryTransactionFilter method
   * @param {Object} data
   * @var {Object} this.data
   */
  QueryTransactionFilter(data) {
    this.baseURL = `/v1.1/transactions?initialDate=${data.initialDate}&finalDate=${data.finalDate}`;
    this.data = data;
  }

  /**
   *
   * @param {Function} cb callback(error, response)
   */
  Execute(cb) {
    this.cb = cb;
    client.HttpCreate.httpRequest(this.baseURL, this.method, this.data, this.cb);
  }
}

module.exports = {
  Query: new Query(), // exports the instantiated class
};
