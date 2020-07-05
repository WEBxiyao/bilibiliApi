'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let res=[
      {
        name:'李瑶',
        id:1
      }
    ];
    ctx. apiSuccess(res);
    ctx.throw(500,"报错了")
  }
}

module.exports = HomeController;
