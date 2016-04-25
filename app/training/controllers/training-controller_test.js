/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('TrainingCtrl', function () {
  var ctrl;

  beforeEach(module('training'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('TrainingCtrl');
  }));

  it('should have ctrlName as TrainingCtrl', function () {
    expect(ctrl.ctrlName).toEqual('TrainingCtrl');
  });
});
