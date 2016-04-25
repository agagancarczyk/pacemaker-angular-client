/* global describe, beforeEach, it, browser, expect */
'use strict';

var FriendsPagePo = require('./friends.po');

describe('Friends page', function () {
  var friendsPage;

  beforeEach(function () {
    friendsPage = new FriendsPagePo();
    browser.get('/#/friends');
  });

  it('should say FriendsCtrl', function () {
    expect(friendsPage.heading.getText()).toEqual('friends');
    expect(friendsPage.text.getText()).toEqual('FriendsCtrl');
  });
});
