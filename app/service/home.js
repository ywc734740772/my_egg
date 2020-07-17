'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async getList() {
    return [ 1, 2, 3, 4, 5, 6 ];
  }
}

module.exports = HomeService;
