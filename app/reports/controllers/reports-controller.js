(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name reports.controller:ReportsCtrl
   *
   * @description
   *
   */
  angular
    .module('reports')
    .controller('ReportsCtrl', ReportsCtrl);

  function ReportsCtrl(Users, FitnessActivities, $cookies, $rootScope) {
    var vm = this;
    vm.ctrlName = 'ReportsCtrl';
    vm.userProfile = '';
    vm.activities = '';
    $rootScope.typeSelectedActivity = null;
    vm.walkingActivities = [];
    vm.runningActivities = [];
    vm.cyclingActivities = [];

    /*
     * Get User's Profile
     */
    Users.getUserProfile().success(function (data) {
      vm.userProfile = data;
    });

    /*
     * Get User's Fitness Activities
     */
    FitnessActivities.getFeeds().success(function (data) {
      vm.activities = data.items;
    });
      vm.running = function () {
        vm.runningActivities = [];
        for (var i = 0; i < vm.activities.length; i++){
          if (vm.activities[i].type === 'Running'){
            vm.runningActivities.push(vm.activities[i]);
         }
       }
       console.log(vm.runningActivities);
      };

      vm.walking = function () {
        vm.walkingActivities = [];
        for (var i = 0; i <= vm.activities.length; i++){
          if (vm.activities[i].type === 'Walking'){
            vm.walkingActivities.push(vm.activities[i]);
         }
       }
       console.log(vm.walkingActivities);
      };

      vm.cycling = function () {
        vm.cyclingActivities = [];
        for (var i = 0; i <= vm.activities.length; i++){
          if (vm.activities[i].type === 'Cycling'){
            vm.cyclingActivities.push(vm.activities[i]);
         }
       }
       console.log(vm.cyclingActivities);
      };




  }
}());
