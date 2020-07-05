'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
   // 注册
   async reg() {
    const {ctx ,app}=this;
    let {username,password,repassword}=ctx.request.body;
    // 参数验证
    ctx.validate({
        username: {
            type: 'string',
            required: true,
            range: {
                min: 5,
                max: 20
            },
            desc: '用户名'
        },
        password: {
            type: 'string',
            required: true,
            desc: '密码'
        },
        repassword: {
            type: 'string',
            required: true,
            desc: '确认密码'
        }
    }, {
        equals: [
            ['password', 'repassword']
        ]
    });
    //判断是否存在用户名
    let res=await app.model.User.findOne({
        where:{
            username
        }
    })
    if(res){
        ctx.throw(400,'用户已存在');
    }
    let user=await app.model.User.create({
        username,
        password
    })
    if(!user){
        return ctx.throw(400,'创建用户失败')
    }
    ctx.apiSuccess(user)
  }
}

module.exports = UserController;

