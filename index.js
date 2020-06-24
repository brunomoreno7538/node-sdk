const https = require('https');

const referenceCode = Math.random().toString(36).substring(9);

const data = JSON.stringify({
  currency: 'BRL',
  amount: 1.99,
  referenceCode,
  maxAge: 120,
  paymentMethod: 'ITAU_TRANSFER_PF',
  callbackURL: 'https://foo.bar/paymeeListener',
  shopper: {
    email: 'foo@bar.com.br',
    name: 'JOHN DOE',
    document: {
      type: 'CPF',
      number: '62012777066',
    },
    bankDetails: {
      branch: '1234',
      account: '12345-6',
    },
    phone: {
      type: 'MOBILE',
      number: '11999990000',
    },
  },
});

const options = {
  hostname: 'apisandbox.paymee.com.br',
  path: '/v1.1/checkout',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    'x-api-key': '4397d1ca-f638-3614-9170-5d8fb88367f1',
    'x-api-token': 'be1f0b79-f282-31a8-9331-13a075381a3f',
  },
};

console.log(options);

const req = https
  .request(options, (res) => {
    let data = '';
    console.log(`Status code: ${res.statusCode}`);

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      const dados = JSON.parse(data);
      console.log(`uuid: ${dados.response.uuid}`);
    });
  })
  .on('error', (err) => {
    console.log(`Erro: ${err.message}`);
  });

req.write(data);
req.end();
