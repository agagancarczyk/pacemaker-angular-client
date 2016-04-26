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

  function ActivitiesCtrl(FitnessActivities, $stateParams, $cookies, $state) {
    var vm = this;
    vm.ctrlName = 'ActivitiesCtrl';
    vm.activities = '';
    vm.monthName = '';

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
