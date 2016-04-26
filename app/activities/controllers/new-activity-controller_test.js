/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('NewActivityCtrl', function () {
  var ctrl;

  beforeEach(module('activities','pacemakerClient'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('NewActivityCtrl');
  }));

  it('should have ctrlName as NewActivityCtrl', function () {
    expect(ctrl.ctrlName).toEqual('NewActivityCtrl');
  });
});
