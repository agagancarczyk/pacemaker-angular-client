(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name login.controller:LoginCtrl
   *
   * @description
   *
   */
  angular
    .module('login')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl($rootScope, Users, $state) {
    var vm = this;
    vm.ctrlName = 'LoginCtrl';

    vm.authenticate = function () {
      $state.go('home');
    };
}

}());
