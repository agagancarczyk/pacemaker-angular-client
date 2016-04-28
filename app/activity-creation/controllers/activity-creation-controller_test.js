/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ActivityCreationCtrl', function () {
  var ctrl;

  beforeEach(module('activityCreation','pacemakerClient'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ActivityCreationCtrl');
  }));

  it('should have ctrlName as ActivityCreationCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ActivityCreationCtrl');
  });
});
