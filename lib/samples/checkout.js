const paymee = require('../paymee-sdk')();

const referenceCode = Math.random().toString(36).substring(9);

const apiKey = '4397d1ca-f638-3614-9170-5d8fb88367f1';
const tokenKey = 'be1f0b79-f282-31a8-9331-13a075381a3f';

const shopper = paymee.Shopper.shopperInfo({
  email: 'teste@hmail.com',
  name: 'Bruno Moreno',
  cpf: 'XXXX7889841',
  branch: 'XXXX',
  account: '312312312',
  phone: 'XXXX308507',
});

const createPayment = {
  currency: 'BRL',
  amount: 1.99,
  referenceCode,
  maxAge: 120,
  paymentMethod: 'ITAU_TRANSFER_PF',
  callbackURL: 'https://foo.bar/paymeeListener',
  shopper,
  type: 'REDIRECT',
  mode: 'SANDBOX',
};

paymee.transaction(createPayment, apiKey, tokenKey, (error, payment) => {
  if (error) {
    throw error;
  } else {
    console.log(payment);
  }
});
