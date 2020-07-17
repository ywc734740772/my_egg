'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        const listRes = await ctx.service.home.getList();
        this.app.foo(new Date().getTime());
        ctx.body = {
            status: 0,
            data: listRes,
        };
    }
    async view() {
        await this.ctx.render('index');
    }
}

module.exports = HomeController;
