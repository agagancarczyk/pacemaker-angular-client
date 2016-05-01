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
        vm.chartData2 = 5.0;
        vm.chartData4 = 10.0;
        vm.chartData6 = 15.0; //4
        vm.chartData8 = 20.0; //6
        vm.chartData10 = 25.0; //8

        if(vm.chartData > 0 && vm.chartData < 5.0){
          vm.chartData1 = vm.chartData;
          $rootScope.data = [
            [vm.chartData1]
          ];
          console.log("vm.chartData1: " + $rootScope.data);
        }
        if(vm.chartData >= 5.0 && vm.chartData < 10.0){
          vm.diff1 = vm.chartData - vm.chartData2;
          vm.chartData3 = vm.chartData2 + vm.diff1;
          $rootScope.data = [
            [vm.chartData2, vm.chartData3]
          ];
          console.log("vm.chartData2: " + $rootScope.data);
        }
        if(vm.chartData >= 10.0 && vm.chartData < 15.0){
          vm.diff2 = vm.chartData - vm.chartData4;
          vm.chartData5 = vm.chartData4 + vm.diff2;
          $rootScope.data = [
            [vm.chartData2, vm.chartData4, vm.chartData5]
          ];
          console.log("vm.chartData3: " + $rootScope.data);
        }
        if(vm.chartData >= 15.0 && vm.chartData < 20.0){
          vm.diff3 = vm.chartData - vm.chartData6;
          vm.chartData7 = vm.chartData6 + vm.diff3;
          $rootScope.data = [
            [vm.chartData2, vm.chartData4, vm.chartData6, vm.chartData7]
          ];
          console.log("vm.chartData4: " + $rootScope.data);
        }
        if(vm.chartData >= 20.0 && vm.chartData < 25.0){
          vm.diff4 = vm.chartData - vm.chartData8;
          vm.chartData9 = vm.chartData8 + vm.diff4;
          $rootScope.data = [
            [vm.chartData2, vm.chartData4, vm.chartData6, vm.chartData8, vm.chartData9]
          ];
          console.log("vm.chartData5: " + $rootScope.data);
        }
        if(vm.chartData >= 25.0 && vm.chartData <= 30.0){
          vm.diff5 = vm.chartData - vm.chartData10;
          vm.chartData11 = vm.chartData10 + vm.diff5;
          $rootScope.data = [
            [vm.chartData2, vm.chartData4, vm.chartData6, vm.chartData8, vm.chartData10, vm.chartData11]
          ];
          console.log("vm.chartData6: " + $rootScope.data);
        }

        $rootScope.labels = ["0km - 5km", "5km - 10km", "10km - 15km", "15km - 20km", "20km - 25km", "25km - 30km"];
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
