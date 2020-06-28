/* eslint no-underscore-dangle: 0 */
const configure = require('./config');

/**
 * Class PayMeeEnviroment - has methods to set the api key, token key and enviroment
 */
class PayMeeEnviroment {
  /**
   * PayMeeEnviroment constructor
   * @param {Object} mode
   * @param {string} apiKey
   * @param {string} apiToken
   */
  constructor(mode, apiKey, apiToken) {
    this._mode = mode;
    this._apiKey = apiKey;
    this._apiToken = apiToken;
  }

  /**
   * setConfiguration method
   * @param {void}
   */
  setConfiguration() {
    configure.headers['x-api-key'] = this._apiKey;
    configure.headers['x-api-token'] = this._apiToken;
    if (this._mode === 'SANDBOX' || this._mode === 'LIVE') {
      if (this._mode === 'SANDBOX') {
        configure.hostname = 'apisandbox.paymee.com.br';
      }
      if (this._mode === 'LIVE') {
        configure.hostname = 'api.paymee.com.br';
      }
    }
  }
}

module.exports = PayMeeEnviroment;
