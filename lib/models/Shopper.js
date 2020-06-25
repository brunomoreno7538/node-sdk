class Shopper {
  constructor() {
    /**
     * @var {string}
     */
    let email;

    /**
     * @var {string}
     */
    let name;

    /**
     * @var {string}
     */
    let cpf;

    /**
     * @var {string}
     */
    let branch;

    /**
     * @var {string}
     */
    let account;

    /**
     * @var {string}
     */
    let phone;

    /**
     *Set the value of email
     *
     * @param {string} emailData
     */
    this.setEmail = (emailData) => {
      email = emailData;
    };

    /**
     * Get the value of email
     *
     * @return {string}
     */
    this.getEmail = () => email;

    /**
     *Set the value of name
     *
     * @param {string} nameData
     */
    this.setName = (nameData) => {
      name = nameData;
    };

    /**
     * Get the value of name
     *
     * @return {string}
     */
    this.getName = () => name;

    /**
     *Set the value of cpf
     *
     * @param {string} cpfData
     */
    this.setCpf = (cpfData) => {
      cpf = cpfData;
    };

    /**
     * Get the value of cpf
     *
     * @return {string}
     */
    this.getCpf = () => cpf;

    /**
     *Set the value of branch
     *
     * @param {string} branchData
     */
    this.setBranch = (branchData) => {
      branch = branchData;
    };

    /**
     * Get the value of branch
     *
     * @return {string}
     */
    this.getBranch = () => branch;

    /**
     *Set the value of account
     *
     * @param {string} accountData
     */
    this.setAccount = (accountData) => {
      account = accountData;
    };

    /**
     * Get the value of account
     *
     * @return {string}
     */
    this.getAccount = () => account;

    /**
     *Set the value of phone
     *
     * @param {string} phoneData
     */
    this.setPhone = (phoneData) => {
      phone = phoneData;
    };

    /**
     * Get the value of phone
     *
     * @return {string}
     */
    this.getPhone = () => phone;
  }

  /**
   *
   * @param {string} data
   * @returns Shopper
   */
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
