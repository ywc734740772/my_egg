'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.view);

    router.post('/login', controller.user.login);
    router.post('/register', controller.user.register);
    router.get('/getLUser', controller.user.getLUser);
};
