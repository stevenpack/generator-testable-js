var assert = require('chai').assert;
var app = require('./app');
describe('App', () => {
  it('Says hello', () => {
    assert.equal("hello", app.hello());
  });
});
