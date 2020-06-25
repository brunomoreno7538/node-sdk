const classe = require('./lib/models/shopperBeta');
const teste = require('./lib/models/Shopper');

classe.setEmail('dawda');
console.log(classe.getEmail());

console.log(
  teste.shopperInfo({
    email: 'teste@hmail.com',
    name: 'Bruno Moreno',
    cpf: 'XXXX7889841',
    branch: 'XXXX',
    account: '312312312',
    phone: 'XXXX308507',
  }),
);
