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

## 依赖说明

### 依赖的 egg 版本

egg-qcloud-weapp-sdk 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.qcloudWeappSDK = {
  enable: true,
  package: 'egg-qcloud-weapp-sdk',
};
```


## 使用场景

- Why and What: 由于[wafer-node-server-sdk](https://github.com/tencentyun/wafer-node-server-sdk)最初是为express框架设计的SDK，而eggjs基于koa框架开发，所以会报错。这个插件就是用来解决这个问题。
- Note: 信道服务暂不支持

- How: 具体的示例代码:

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

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。
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

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
