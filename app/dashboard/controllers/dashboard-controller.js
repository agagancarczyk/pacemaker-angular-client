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
    vm.userProfile = '';
    vm.recentActivities = '';
    
    /*
     * Get User's Resources
     */
    Users.getUserResources().success(function (data) {
      vm.userData = data;
      console.log(vm.userData);
    });

    /*
     * Get User's Profile
     */
    Users.getUserProfile().success(function (data) {
      vm.userProfile = data;
      console.log(vm.userProfile);
    });

    /*
     * Get User's Recent Activities
     */
    FitnessActivities.getFeeds().success(function (data) {
      vm.recentActivities = data;
      console.log(vm.recentActivities);
    });

    vm.dashboard = function () {
      $state.go('dashboard');
    };

    vm.logout = function () {
      $cookies.remove('access_token');
      $state.go('home');
    };
  }
}());
