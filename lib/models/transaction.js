const api = require('../api');

function transaction(data, X_API_KEY, X_TOKEN_KEY, cb) {
  const baseURL = '/v1.1/checkout';
  if (
    data.currency === null
    || data.currency === undefined
    || !isNaN(data.currency)
  ) {
    throw new Error('currency invalid');
  }

  if (data.amount === null || data.amount === undefined || isNaN(data.amount)) {
    throw new Error('ammount invalid');
  }

  api(baseURL, 'POST', X_API_KEY, X_TOKEN_KEY, data, cb);
}

module.exports = transaction;
