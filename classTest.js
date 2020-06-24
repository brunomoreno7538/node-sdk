const classe = require('./ignore/shopper');

const shopper = classe.shopperInfo({
  email: 'teste@hmail.com',
  name: 'Bruno Moreno',
  cpf: 'XXXX7889841',
  branch: 'XXXX',
  account: '312312312',
  phone: 'XXXX308507',
});

console.log(shopper);
