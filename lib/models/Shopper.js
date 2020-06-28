class Shopper {
  /**
   * Get the value of email
   * @returns this._email;
   */
  getEmail() {
    return this._email;
  }

  /**
   * Set the value of email
   * @param {string} data
   */
  setEmail(data) {
    this._email = data;
  }

  /**
   * Get the value of name
   * @returns this._name;
   */
  getName() {
    return this._name;
  }

  /**
   * Set the value of name
   * @param {string} data
   */
  setName(data) {
    this._name = data;
  }

  /**
   * Get the value of CPF
   * @returns this._cpf;
   */
  getCpf() {
    return this._cpf;
  }

  /**
   * Set the value of CPF
   * @param {string} data
   */
  setCpf(data) {
    this._cpf = data;
  }

  /**
   * Get the value of branch
   * @returns this._branch;
   */
  getBranch() {
    return this._branch;
  }

  /**
   * Set the value of branch
   * @param {string} data
   */
  setBranch(data) {
    this._branch = data;
  }

  /**
   * Get the value of account
   * @returns this._account;
   */
  getAccount() {
    return this._account;
  }

  /**
   * Set the value of branch
   * @param {string} data
   */
  setAccount(data) {
    this._account = data;
  }

  /**
   * Get the value of phone
   * @returns this._phone;
   */
  getPhone() {
    return this._phone;
  }

  /**
   * Set the value of phone
   * @param {string} data
   */
  setPhone(data) {
    this._phone = data;
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
