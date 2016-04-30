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

      $rootScope.setSelected = function (typeSelectedActivity) {
        $rootScope.typeSelectedActivity = typeSelectedActivity;
          console.log($rootScope.typeSelectedActivity);
      }
    });

  }
}());
