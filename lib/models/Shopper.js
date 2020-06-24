module.exports = function (conta) {
  return {
    email: conta.email,
    name: conta.name,
    document: {
      type: 'CPF',
      number: conta.cpf,
    },
    bankDetails: {
      branch: conta.branch,
      account: conta.account,
    },
    phone: {
      type: 'MOBILE',
      number: conta.phone,
    },
  };
};
