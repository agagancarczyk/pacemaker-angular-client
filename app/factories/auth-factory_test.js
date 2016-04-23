/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Auth', function () {
  var factory;

  beforeEach(module('pacemakerClient'));

  beforeEach(inject(function (Auth) {
    factory = Auth;
  }));

  it('should have factoryName be Auth', function () {
    expect(factory.factoryName).toEqual('Auth');
  });
});
