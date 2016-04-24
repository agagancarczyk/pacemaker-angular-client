/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('FitnessActivities', function () {
  var factory;

  beforeEach(module('pacemakerClient'));

  beforeEach(inject(function (FitnessActivities) {
    factory = FitnessActivities;
  }));

  it('should have factoryName be FitnessActivities', function () {
    expect(factory.factoryName).toEqual('FitnessActivities');
  });
});
