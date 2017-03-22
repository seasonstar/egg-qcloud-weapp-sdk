# egg-qcloud-weapp-sdk

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-qcloud-weapp-sdk.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-qcloud-weapp-sdk
[travis-image]: https://img.shields.io/travis/eggjs/egg-qcloud-weapp-sdk.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-qcloud-weapp-sdk
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-qcloud-weapp-sdk.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-qcloud-weapp-sdk?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-qcloud-weapp-sdk.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-qcloud-weapp-sdk
[snyk-image]: https://snyk.io/test/npm/egg-qcloud-weapp-sdk/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-qcloud-weapp-sdk
[download-image]: https://img.shields.io/npm/dm/egg-qcloud-weapp-sdk.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-qcloud-weapp-sdk

<!--
Description here.
-->

## Install

```bash
$ npm i egg-qcloud-weapp-sdk --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.qcloudWeappSDK = {
  enable: true,
  package: 'egg-qcloud-weapp-sdk',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.qcloudWeappSDK = {
  serverHost: '',
  authServerUrl: '',
  tunnelServerUrl: '',
  tunnelSignatureKey: '',
  tunnelCheckSignature: true,
  networkTimeout: 30000,
};
```

- Why and What: [wafer-node-server-sdk](https://github.com/tencentyun/wafer-node-server-sdk) is for Express，but eggjs is based on Koa.  so, you know.. This plugin comes out to solve the problem.

- Note: Tunnel service is not supported now.

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

```js
// app/controller/weapp.js
module.exports = app => {
  class WeappController extends app.Controller {
    * login() {
      const { ctx, app } = this;
      const loginService = app.qcloudWeapp.LoginService.create(ctx.request, ctx.response);
      yield loginService.login()
        .then(data => {
          ctx.body = data;
        });
    }

    * user() {
      const { ctx, app } = this;
      const loginService = app.qcloudWeapp.LoginService.create(ctx.request, ctx.response);
      yield loginService.check()
        .then(data => {
          ctx.body = {
            code: 0,
            message: 'ok',
            data: {
              userInfo: data.userInfo,
            },
          };
        });
    }
  }
  return WeappController;
};
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
