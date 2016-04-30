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

  function ReportsCtrl(Users, FitnessActivities, $cookies) {
    var vm = this;
    vm.ctrlName = 'ReportsCtrl';
    vm.userProfile = '';
    vm.activityType = '';

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
      for (var i = 0; i < vm.activities.length; i++) {
        vm.activityType = vm.activities[i].type;

        if (vm.activityType == 'Cycling'){
          vm.cycling = function () {
             console.log('success cycling!');
          };
        }

        if (vm.activityType == 'Walking'){
          vm.walking = function () {
             console.log('success walking!');
          };
        }

        if (vm.activityType == 'Running'){
          vm.running = function () {
             console.log('success running!');
          };
        }

      }
    });

  }
}());
