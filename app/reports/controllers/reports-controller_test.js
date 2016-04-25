/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ReportsCtrl', function () {
  var ctrl;

  beforeEach(module('reports'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ReportsCtrl');
  }));

  it('should have ctrlName as ReportsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ReportsCtrl');
  });
});
