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
     vm.activityCharts = function() {
     vm.chartData0 = 0;
     vm.chartData2 = 5.0;
     vm.chartData4 = 10.0;
     vm.chartData6 = 15.0;
     vm.chartData8 = 20.0;
     vm.chartData10 = 25.0;

     if(vm.chartData > 0 && vm.chartData < 5.0){
       vm.chartData1 = vm.chartData;
       $rootScope.data = [
         [vm.chartData0, vm.chartData1]
       ];
     }
     if(vm.chartData >= 5.0 && vm.chartData < 10.0){
       vm.diff1 = vm.chartData - vm.chartData2;
       vm.chartData3 = vm.chartData2 + vm.diff1;
       $rootScope.data = [
         [vm.chartData0, vm.chartData2, vm.chartData3]
       ];
     }
     if(vm.chartData >= 10.0 && vm.chartData < 15.0){
       vm.diff2 = vm.chartData - vm.chartData4;
       vm.chartData5 = vm.chartData4 + vm.diff2;
       $rootScope.data = [
         [vm.chartData0, vm.chartData2, vm.chartData4, vm.chartData5]
       ];
     }
     if(vm.chartData >= 15.0 && vm.chartData < 20.0){
       vm.diff3 = vm.chartData - vm.chartData6;
       vm.chartData7 = vm.chartData6 + vm.diff3;
       $rootScope.data = [
         [vm.chartData0, vm.chartData2, vm.chartData4, vm.chartData6, vm.chartData7]
       ];
     }
     if(vm.chartData >= 20.0 && vm.chartData < 25.0){
       vm.diff4 = vm.chartData - vm.chartData8;
       vm.chartData9 = vm.chartData8 + vm.diff4;
       $rootScope.data = [
         [vm.chartData0, vm.chartData2, vm.chartData4, vm.chartData6, vm.chartData8, vm.chartData9]
       ];
     }
     if(vm.chartData >= 25.0 && vm.chartData <= 30.0){
       vm.diff5 = vm.chartData - vm.chartData10;
       vm.chartData11 = vm.chartData10 + vm.diff5;
       $rootScope.data = [
         [vm.chartData0, vm.chartData2, vm.chartData4, vm.chartData6, vm.chartData8, vm.chartData10, vm.chartData11]
       ];
     }

     $rootScope.labels = ["0km", "0.1km-5.0km", "5.0km-10.0km", "10.0km-15.0km", "15.0km-20.0km", "20.0km-25.0km", "25.0km-30.0km"];
     $rootScope.series = ['Average Speed'];
   };

    FitnessActivities.getFeeds().success(function (data) {
      vm.activities = data.items;

      //Most Recent Activity - Default
      vm.mostRecentActivity = vm.activities.slice(0)[0];
      vm.chartData = (((((vm.mostRecentActivity.total_distance)/1000).toFixed(2))/(vm.mostRecentActivity.duration/60))*60).toFixed(2);
      vm.activityCharts();

      //Selected Activity - Buttons
      $rootScope.setSelected = function (typeSelectedActivity) {
        $rootScope.typeSelectedActivity = typeSelectedActivity;
        vm.chartData = (((((typeSelectedActivity.total_distance)/1000).toFixed(2))/(typeSelectedActivity.duration/60))*60).toFixed(2);
        vm.activityCharts();
      };

      var i = 0;
      while (i < vm.activities.length) {
        vm.monthName = (vm.activities[i].start_time).slice(7,16);
        ++i;
      }
    });
  }
}());
