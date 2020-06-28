const client = require('../core/client');

class QueryTransaction {
  constructor() {
    this._baseURL = null;
    this._method = 'GET';
  }

  QueryTransaction(data, cb) {
    this._baseURL = `/v1.1/transactions/${data.uuid}`;
    const httpRequest = new client.HttpCreate(this._baseURL, this._method, data, cb);
    httpRequest.httpRequestPost();
  }
}

module.exports = {
  QueryTransaction: new QueryTransaction(),
};
