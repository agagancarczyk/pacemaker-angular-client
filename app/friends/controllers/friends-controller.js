(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name friends.controller:FriendsCtrl
   *
   * @description
   *
   */
  angular
    .module('friends')
    .controller('FriendsCtrl', FriendsCtrl);

  function FriendsCtrl() {
    var vm = this;
    vm.ctrlName = 'FriendsCtrl';
  }
}());
