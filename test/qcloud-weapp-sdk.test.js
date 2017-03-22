'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/qcloud-weapp-sdk.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/qcloud-weapp-sdk-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, qcloud-weapp-sdk')
      .expect(200);
  });
});
