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

  function DashboardCtrl(Users, FitnessActivities, $stateParams, $cookies, $state) {
    var vm = this;
    vm.ctrlName = 'DashboardCtrl';
    vm.userData = '';
    vm.userProfile = '';
    vm.activities = '';
    vm.caloriesSum = 0;
    vm.distanceSum = 0;
    vm.activitiesSum = 0;

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
      vm.bDate = new Date(vm.userProfile.birthday);
      vm.bMnth = ("0" + (vm.bDate.getMonth()+1)).slice(-2),
      vm.bDay  = ("0" + vm.bDate.getDate()).slice(-2);
      vm.fullBDate = vm.bDay + '-' + vm.bMnth + '-' + vm.bDate.getFullYear();
    });

    /*
     * Get User's Recent Activities
     */
    FitnessActivities.getFeeds().success(function (data) {
      vm.activities = data.items;
      vm.activitiesSum = vm.activities.length;

      var i = 0;
      while (i < vm.activities.length) {
        vm.caloriesSum = vm.caloriesSum + vm.activities[i].total_calories;
        ++i;
      }

      var j = 0;
      while (j < vm.activities.length) {
        vm.distanceSum = vm.distanceSum + vm.activities[j].total_distance;
        vm.distanceToFixed = vm.distanceSum.toFixed();
        ++j;
      }
    });

    Users.getUserResourcesWeight().success(function (data) {
      vm.weight = data.items[0].weight;
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
