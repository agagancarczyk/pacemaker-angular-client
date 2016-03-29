/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('baseendpoint', function () {
  var constant;

  beforeEach(module('pacemakerClient'));

  beforeEach(inject(function (baseendpoint) {
    constant = baseendpoint;
  }));

  it('should equal /api/', function () {
    expect(constant).toBe('/api/');
  });
});
