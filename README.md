# Node SDK
## Examples
### Making a checkout
```
const paymee = require('../paymee-sdk')();

const apiKey = '4397d1ca-f638-3614-9170-5d8fb88367f1';
const tokenKey = 'be1f0b79-f282-31a8-9331-13a075381a3f';

const env = new paymee.CoreConfig('SANDBOX', apiKey, tokenKey);
env.setConfiguration();

const shopper = paymee.Shopper.shopperInfo({
  // sets the shopper info
  email: 'teste@hmail.com',
  name: 'Bruno Moreno',
  cpf: 'XXXX7889841',
  branch: 'XXXX',
  account: '312312312',
  phone: 'XXXX308507',
});

const createPayment = {
  // sets the order info
  currency: 'BRL',
  amount: 1.99,
  referenceCode: '1x002',
  maxAge: 120,
  paymentMethod: 'ITAU_TRANSFER_PF',
  callbackURL: 'https://foo.bar/paymeeListener',
  shopper,
};

paymee.checkout.TransparentCheckout(createPayment);
paymee.checkout.Execute((error, response) => {
  if (error) {
    throw error;
  } else {
    console.log(response);
  }
});

```
### Search for a transaction
```
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

```
