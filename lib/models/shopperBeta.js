class Shopper {
  /**
   * Get the value of email
   */
  getEmail() {
    return this.email;
  }

  /**
   * Set the value of email
   * @param {string} data
   */
  setEmail(data) {
    this.email = data;
  }

  /**
   * Get the value of name
   */
  getName() {
    return this.name;
  }

  /**
   * Set the value of name
   * @param {string} data
   */
  setName(data) {
    this.name = data;
  }

  /**
   * Get the value of CPF
   */
  getCpf() {
    return this.cpf;
  }

  /**
   * Set the value of CPF
   * @param {string} data
   */
  setCpf(data) {
    this.cpf = data;
  }

  /**
   * Get the value of branch
   */
  getBranch() {
    return this.branch;
  }

  /**
   * Set the value of branch
   * @param {string} data
   */
  setBranch(data) {
    this.branch = data;
  }

  /**
   * Get the value of account
   */
  getAccount() {
    return this.account;
  }

  /**
   * Set the value of branch
   * @param {string} data
   */
  setAccount(data) {
    this.account = data;
  }

  /**
   * Get the value of phone
   */
  getPhone() {
    return this.phone;
  }

  /**
   * Set the value of phone
   * @param {string} data
   */
  setPhone(data) {
    this.phone = data;
  }

  /**
   *
   * @param {Object} data         Information about the shopper
   * @param {string} data.email   Shopper's email
   * @param {string} data.cpf     Shopper's CPF
   * @param {string} data.branch  Shopper's branch
   * @param {string} data.account Shopper's account
   * @param {string} data.phone   Shopper's phone
   * @returns                     A object with shopper information
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
