(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name activities.controller:ActivitiesCtrl
   *
   * @description
   *
   */
  angular
    .module('activities')
    .controller('ActivitiesCtrl', ActivitiesCtrl);

  function ActivitiesCtrl(Users, FitnessActivities, $stateParams, $cookies, $state, $rootScope) {
    var vm = this;
    vm.ctrlName = 'ActivitiesCtrl';
    vm.userProfile = '';
    vm.activities = '';
    vm.monthName = '';

    $rootScope.typeSelectedActivity = null;
    $rootScope.setSelected = function (typeSelectedActivity) {
      $rootScope.typeSelectedActivity = typeSelectedActivity;
      console.log($rootScope.typeSelectedActivity);
    };

    /*
     * Get User's Profile
     */
    Users.getUserProfile().success(function (data) {
      vm.userProfile = data;
    });

    /*
     * Get User's Activities
     */
    FitnessActivities.getFeeds().success(function (data) {
      vm.activities = data.items;

      var i = 0;
      while (i < vm.activities.length) {
        vm.monthName = (vm.activities[i].start_time).slice(7,16);
        ++i;
      }
    });
  }
}());
