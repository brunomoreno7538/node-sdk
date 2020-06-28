module.exports = () => ({
  checkout: require('./helpers/PaymeeCheckOut').CheckOut,
  query: require('./helpers/Query').QueryTransaction,
  Shopper: require('./models/Shopper'),
  CoreConfig: require('./core/paymee_enviroment'),
});
