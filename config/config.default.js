/* eslint valid-jsdoc: "off" */

'use strict';
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */

module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1589607656274_6790';

    // add your middleware config here
    config.middleware = ['auth', 'compress'];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    config.compress = {
        threshold: 1024,
        // br: false
    }

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.html': 'nunjucks' //左边写成.html后缀，会自动渲染.html文件
        },
    };

    // //静态资源配置
    config.static = {
        prefix: '/operation/',
        dir: `${appInfo.baseDir}/app/view/`,
    };

    config.assets = {
        publicPath: '/view/',
    };

    config.mysql = {
        client: {
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: '123456',
            database:'egg_sql',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    };

    config.cors = {
        origin:'*',
        allowMethods: 'GET,PUT,POST,DELETE'
    };

    return {
        ...config,
        ...userConfig,
    };
};
