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

  function LoginCtrl($rootScope, Users, $state, $stateParams) {
    var vm = this;
    vm.ctrlName = 'LoginCtrl';
    vm.parameters = {
      email: $stateParams.email,
      password: $stateParams.password
    };
    vm.token = '';

    Users.login(vm.email, vm.password, function (response) {
      var token = response;
      var strToken = JSON.stringify(token);
      console.log('token: ' + strToken);
    });

    vm.authenticate = function () {
      $state.go('dashboard');
    };
}

}());
