/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ActivitiesCtrl', function () {
  var ctrl;

  beforeEach(module('activities'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ActivitiesCtrl');
  }));

  it('should have ctrlName as ActivitiesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ActivitiesCtrl');
  });
});
