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

      $rootScope.setSelected = function (typeSelectedActivity) {
        $rootScope.typeSelectedActivity = typeSelectedActivity;

        vm.chartData = (((((typeSelectedActivity.total_distance)/1000).toFixed(2))/(typeSelectedActivity.duration/60))*60).toFixed(2);
        vm.chartData0 = 0;
        vm.chartData2 = 0.5;
        vm.chartData4 = 1.0;
        vm.chartData6 = 1.5;

        if(vm.chartData > 0 && vm.chartData < 0.5){
          vm.chartData1 = vm.chartData;
          console.log("vm.chartData1: " + $rootScope.data);
          $rootScope.data = [
            [vm.chartData0, vm.chartData1]
          ];
        }
        if(vm.chartData >= 0.5 && vm.chartData < 1.0){
          vm.diff1 = vm.chartData - vm.chartData2;
          vm.chartData3 = vm.chartData2 + vm.diff1;
          $rootScope.data = [
            [vm.chartData0, vm.chartData2, vm.chartData3]
          ];
          console.log("vm.chartData2: " + $rootScope.data);
        }
        if(vm.chartData >= 1.0 && vm.chartData < 1.5){
          vm.diff2 = vm.chartData - vm.chartData4;
          vm.chartData5 = vm.chartData4 + vm.diff2;
          $rootScope.data = [
            [vm.chartData0, vm.chartData2, vm.chartData4, vm.chartData5]
          ];
          console.log("vm.chartData3: " + $rootScope.data);
        }
        if(vm.chartData >= 1.5 && vm.chartData < 2.0){
          vm.diff3 = vm.chartData - vm.chartData6;
          vm.chartData7 = vm.chartData6 + vm.diff3;
          $rootScope.data = [
            [vm.chartData0, vm.chartData2, vm.chartData4, vm.chartData6, vm.chartData7]
          ];
          console.log("vm.chartData4: " + $rootScope.data);
        }

        $rootScope.labels = ["0km - 0.5km", "0.5km - 1.0km", "1.0km - 1.5km", "1.5km - 2.0km"];
        $rootScope.series = ['Average Speed'];
      };

      var i = 0;
      while (i < vm.activities.length) {
        vm.monthName = (vm.activities[i].start_time).slice(7,16);
        ++i;
      }
    });
  }
}());
