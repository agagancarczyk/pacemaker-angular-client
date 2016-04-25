/* global describe, beforeEach, it, browser, expect */
'use strict';

var ActivitiesPagePo = require('./activities.po');

describe('Activities page', function () {
  var activitiesPage;

  beforeEach(function () {
    activitiesPage = new ActivitiesPagePo();
    browser.get('/#/activities');
  });

  it('should say ActivitiesCtrl', function () {
    expect(activitiesPage.heading.getText()).toEqual('activities');
    expect(activitiesPage.text.getText()).toEqual('ActivitiesCtrl');
  });
});
