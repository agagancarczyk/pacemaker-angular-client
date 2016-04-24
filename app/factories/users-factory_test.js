/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Users', function () {
  var factory;

  beforeEach(module('pacemakerClient'));

  beforeEach(inject(function (Users) {
    factory = Users;
  }));

  it('should have factoryName be Users', function () {
    expect(factory.factoryName).toEqual('Users');
  });
});
