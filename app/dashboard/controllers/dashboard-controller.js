(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name dashboard.controller:DashboardCtrl
   *
   * @description Dashboard controller
   *
   */
  angular
    .module('dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

  function DashboardCtrl(Users, $stateParams, $cookies, $state) {
    var vm = this;
    vm.ctrlName = 'DashboardCtrl';
    vm.userData = '';
    vm.parameters = {
      resources: $stateParams.resources
    };

    vm.profileInfo = {
      userName: 'Homer Simpson'
    };

    /*
     * Get User's Resources
     */
    Users.getUserResources(vm.parameters.resources, function (data) {
      vm.userData = data;
      console.log('userData: ' + data);
    });

    vm.logout = function () {
      $cookies.remove('access_token');
      $state.go('home');
    };
  }
}());
