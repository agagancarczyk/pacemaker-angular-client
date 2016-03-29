/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Users', function () {
  var factory;

  beforeEach(module('pacemakerClient'));

  beforeEach(inject(function (Users) {
    factory = Users;
  }));

  it('should have someValue be Users', function () {
    expect(factory.someValue).toEqual('Users');
  });

  it('should have someMethod return Users', function () {
    expect(factory.someMethod()).toEqual('Users');
  });
});
