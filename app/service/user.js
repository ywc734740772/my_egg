'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async insertUserInfo(params) {
    const result = await this.app.mysql.insert('users', params);
    return result;
  }

  async queryUserInfo(params) {
    const user = await this.app.mysql.get('users', params);
    return user;
  }
}

module.exports = UserService;
