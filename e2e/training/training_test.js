/* global describe, beforeEach, it, browser, expect */
'use strict';

var TrainingPagePo = require('./training.po');

describe('Training page', function () {
  var trainingPage;

  beforeEach(function () {
    trainingPage = new TrainingPagePo();
    browser.get('/#/training');
  });

  it('should say TrainingCtrl', function () {
    expect(trainingPage.heading.getText()).toEqual('training');
    expect(trainingPage.text.getText()).toEqual('TrainingCtrl');
  });
});
