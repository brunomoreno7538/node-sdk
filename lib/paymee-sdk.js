module.exports = function () {
  return {
    transaction: require('./models/transaction'),
    shopper: require('./models/Shopper'),
  };
};
