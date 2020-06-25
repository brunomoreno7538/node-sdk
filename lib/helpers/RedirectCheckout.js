const api = require('../api');
/**
 *
 * @param {object} data        data about the user
 * @param {string} X_API_KEY   api key
 * @param {string} X_TOKEN_KEY token key
 * @param {function} callback  callback function
 */
function redirectCheckout(data, X_API_KEY, X_TOKEN_KEY, cb) {
  const baseURL = '/v1.1/checkout';
  if (data.currency === null || data.currency === undefined || !isNaN(data.currency)) {
    cb('currency invalid', false);
  }
  if (data.amount === null || data.amount === undefined || isNaN(data.amount)) {
    cb('ammount invalid', false);
  }

  api(baseURL, 'POST', X_API_KEY, X_TOKEN_KEY, data, cb);
}

module.exports = redirectCheckout;
