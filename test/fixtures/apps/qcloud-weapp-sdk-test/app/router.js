'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, ' + app.plugins['qcloud-weapp-sdk'].name;
  });
};
