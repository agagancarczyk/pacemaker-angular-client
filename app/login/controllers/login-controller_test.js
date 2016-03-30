/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('LoginCtrl', function () {
  var ctrl;

  beforeEach(module('login'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('LoginCtrl');
  }));
});
