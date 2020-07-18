'use strict';

const Controller = require('egg').Controller;
const moment = require('moment');
class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const getUser = await ctx.service.user.queryUserInfo({ username });
    console.log(getUser);
    let result = {
      status: 1,
      message: '用户名不存在',
    };
    if (getUser) {
      if (password === getUser.password) {
        result = {
          status: 0,
          message: '登录成功！',
          data: {
            id: getUser.id,
          },
        };
      } else {
        result = {
          status: 1,
          message: '用户名或密码错误',
        };
      }
    }
    ctx.body = result;
  }
  async register() {
    const { ctx } = this;
    const { username, password, phone, email, age, gender } = ctx.request.body;

    const getUser = await ctx.service.user.queryUserInfo({ username });

    console.log(getUser);

    if (getUser) {
      ctx.body = {
        status: 1,
        message: '用户名已存在',
      };
      return;
    }
    // const create_date = moment().format('YYYY-MM-DD HH:mm:ss');
    const create_date = this.app.mysql.literals.now;
    console.log('create_date', create_date);
    const result = await ctx.service.user.insertUserInfo({ username, password, phone, email, age, gender, create_date });
    console.log(result);

    const insertSuccess = result.affectedRows === 1;

    if (insertSuccess) {
      ctx.body = {
        status: 0,
        message: '注册成功！',
        data: 'success',
      };
    }
  }

  async getLUser() {
    const { ctx } = this;
    const { id } = ctx.request.query;
    const userInfo = await ctx.service.user.queryUserInfo({ id });
    ctx.body = {
      status: 0,
      message: '',
      data: userInfo,
    };
  }
}
module.exports = UserController;
