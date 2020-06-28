module.exports = () => ({
  checkout: require('./helpers/PaymeeCheckOut').CheckOut,
  query: require('./helpers/PayMeeQuery').Query,
  Shopper: require('./models/Shopper'),
  CoreConfig: require('./core/paymee_enviroment'),
});
