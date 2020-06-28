const paymee = require('../lib/paymee-sdk')();

const apiKey = '4397d1ca-f638-3614-9170-5d8fb88367f1';
const tokenKey = 'be1f0b79-f282-31a8-9331-13a075381a3f';

const nome = new paymee.CoreConfig('SANDBOX', apiKey, tokenKey);
nome.setConfiguration();

paymee.QueryTransaction.executeQuery({ uuid: '72955178-1eea-3de3-8a04-d73339346f58' }, (error, response) => {
  console.log(response.situation);
});
