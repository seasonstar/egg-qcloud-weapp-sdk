'use strict';

const qcloud = require('./lib/index');

module.exports = app => {
  const config = app.config.qcloudWeappSDK;

  qcloud.config({
    ServerHost: config.serverHost,
    AuthServerUrl: config.authServerUrl,
    TunnelServerUrl: config.tunnelServerUrl,
    TunnelSignatureKey: config.tunnelSignatureKey,
    TunnelCheckSignature: config.tunnelCheckSignature,
    NetworkTimeout: config.networkTimeout,
  });

  app.qcloudWeapp = qcloud;

  app.coreLogger.info('[当前 SDK 使用配置] =>', config);
  app.coreLogger.info('read data ok');

};
