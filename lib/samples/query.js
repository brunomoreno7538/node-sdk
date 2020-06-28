const paymee = require('../paymee-sdk')();

const apiKey = '4397d1ca-f638-3614-9170-5d8fb88367f1';
const tokenKey = 'be1f0b79-f282-31a8-9331-13a075381a3f';

const env = new paymee.CoreConfig('SANDBOX', apiKey, tokenKey);
env.setConfiguration();

paymee.query.QueryTransaction(
  {
    uuid: '4b630b57-4661-3f8e-b18c-3e05e345fdef',
  },
  (error, response) => {
    console.log(response);
  },
);
