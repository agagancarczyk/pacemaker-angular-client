/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('baseurl', function () {
  var constant;

  beforeEach(module('pacemakerClient'));

  beforeEach(inject(function (baseurl) {
    constant = baseurl;
  }));

  it('should equal http://localhost:9000', function () {
    expect(constant).toBe('http://localhost:9000');
  });
});
