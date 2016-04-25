(function () {
  'use strict';

  angular
    .module('friends')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('friends', {
        url: '/friends',
        templateUrl: 'friends/views/friends.tpl.html',
        controller: 'FriendsCtrl',
        controllerAs: 'friends'
      });
  }
}());
