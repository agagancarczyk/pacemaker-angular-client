/* global describe, beforeEach, it, browser, expect */
'use strict';

var ReportsPagePo = require('./reports.po');

describe('Reports page', function () {
  var reportsPage;

  beforeEach(function () {
    reportsPage = new ReportsPagePo();
    browser.get('/#/reports');
  });

  it('should say ReportsCtrl', function () {
    expect(reportsPage.heading.getText()).toEqual('reports');
    expect(reportsPage.text.getText()).toEqual('ReportsCtrl');
  });
});
