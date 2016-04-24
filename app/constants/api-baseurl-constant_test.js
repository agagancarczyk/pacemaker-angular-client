/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('apiBaseurl', function () {
  var constant;

  beforeEach(module('pacemakerClient'));

  beforeEach(inject(function (apiBaseurl) {
    constant = apiBaseurl;
  }));

  it('should equal https://api.runkeeper.com', function () {
    expect(constant).toBe('https://api.runkeeper.com');
  });
});
