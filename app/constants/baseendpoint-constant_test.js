/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('baseendpoint', function () {
  var constant;

  beforeEach(module('pacemakerClient'));

  beforeEach(inject(function (baseendpoint) {
    constant = baseendpoint;
  }));

  it('should equal /apps/', function () {
    expect(constant).toBe('/apps/');
  });
});
