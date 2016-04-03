/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('baseurl', function () {
  var constant;

  beforeEach(module('pacemakerClient'));

  beforeEach(inject(function (baseurl) {
    constant = baseurl;
  }));

  it('should equal https://runkeeper.com', function () {
    expect(constant).toBe('https://runkeeper.com');
  });
});
