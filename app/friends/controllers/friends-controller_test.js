/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('FriendsCtrl', function () {
  var ctrl;

  beforeEach(module('friends'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('FriendsCtrl');
  }));

  it('should have ctrlName as FriendsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('FriendsCtrl');
  });
});
