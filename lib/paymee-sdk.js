module.exports = () => ({
  transaction: require('./helpers/PaymeeCheckOut'),
  Shopper: require('./models/Shopper'),
});
