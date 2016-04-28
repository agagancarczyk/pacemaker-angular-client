/* global describe, beforeEach, it, browser, expect */
'use strict';

var ActivityCreationPagePo = require('./activity-creation.po');

describe('Activity creation page', function () {
  var activityCreationPage;

  beforeEach(function () {
    activityCreationPage = new ActivityCreationPagePo();
    browser.get('/#/activity-creation');
  });

  it('should say ActivityCreationCtrl', function () {
    expect(activityCreationPage.heading.getText()).toEqual('activityCreation');
    expect(activityCreationPage.text.getText()).toEqual('ActivityCreationCtrl');
  });
});
