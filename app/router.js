'use strict';

const { Controller } = require("egg");

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/reg',controller.user.reg);
};
