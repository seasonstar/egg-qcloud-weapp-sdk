'use strict';

const qcloud = require('./lib/index');

module.exports = app => {
  const config = app.config.qcloudWeappSDK;

  qcloud.config({
    AppId: config.appId,
    AppSecret: config.appSecret,
    NetworkTimeout: config.networkTimeout,
    Redis: app.sessionStore,
  });

  app.qcloudWeapp = qcloud;

  app.coreLogger.info('[当前 SDK 使用配置] =>', config);
  app.coreLogger.info('read data ok');

};
