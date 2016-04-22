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

  function DashboardCtrl(Users, $stateParams) {
    var vm = this;
    vm.ctrlName = 'DashboardCtrl';
    vm.parameters = {
      resources: $stateParams.resources
    };
    
  }
}());
