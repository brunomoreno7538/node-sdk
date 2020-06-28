const paymee = require('../paymee-sdk')();

const apiKey = '4397d1ca-f638-3614-9170-5d8fb88367f1';
const tokenKey = 'be1f0b79-f282-31a8-9331-13a075381a3f';

const env = new paymee.CoreConfig('SANDBOX', apiKey, tokenKey);
env.setConfiguration();

paymee.query.QueryTransaction({
  uuid: 'defef81a-6a9c-3388-a4ad-e28b6c95b305',
});
paymee.query.Execute((error, response) => {
  if (error) {
    throw error;
  } else {
    console.log(response);
  }
});
