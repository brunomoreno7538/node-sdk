const api = require('../api');

const teste = api;

module.exports = function QueryTransaction(uuid, api, token) {
  const baseURL = `/v1.1/transactions/${uuid}`;
  api(baseURL, 'GET', api, token);
};
