class Shopper {
  constructor() {
    let email;
    let name;
    let cpf;
    let branch;
    let account;
    let phone;

    this.setEmail = (emailData) => {
      email = emailData;
    };
    this.getEmail = () => email;

    this.setName = (nameData) => {
      name = nameData;
    };
    this.getName = () => name;

    this.setCpf = (cpfData) => {
      cpf = cpfData;
    };
    this.getCpf = () => cpf;

    this.setBranch = (branchData) => {
      branch = branchData;
    };
    this.getBranch = () => branch;

    this.setAccount = (accountData) => {
      account = accountData;
    };
    this.getAccount = () => account;

    this.setPhone = (phoneData) => {
      phone = phoneData;
    };
    this.getPhone = () => phone;
  }

  shopperInfo(data) {
    this.setEmail(data.email);
    this.setName(data.name);
    this.setCpf(data.cpf);
    this.setBranch(data.branch);
    this.setAccount(data.account);
    this.setPhone(data.phone);
    return {
      email: this.getEmail(),
      name: this.getName(),
      document: {
        type: 'CPF',
        number: this.getCpf(),
      },
      bankDetails: {
        branch: this.getBranch(),
        account: this.getAccount(),
      },
      phone: {
        type: 'MOBILE',
        number: this.getPhone(),
      },
    };
  }
}

module.exports = new Shopper();
