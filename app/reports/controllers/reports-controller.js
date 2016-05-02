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
    vm.walkingActivities = [];
    vm.runningActivities = [];
    vm.cyclingActivities = [];
    vm.chartDatesRunning = [];
    vm.chartDistanceRunning = [];
    vm.chartDatesWalking = [];
    vm.chartDistanceWalking = [];
    vm.chartDatesCycling = [];
    vm.chartDistanceCycling = [];
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
      vm.current = 'Running';
      vm.runningActivities = [];
      vm.chartDatesRunning = [];
      vm.chartDistanceRunning = [];

      for (var i = 0; i < vm.activities.length; i++){
        if (vm.activities[i].type === 'Running'){
          vm.runningActivities.push(vm.activities[i]);
        }
      };

      for (var j = 0; j < vm.runningActivities.length; j++){
        vm.chartDatesRunning.push(vm.runningActivities[j].start_time.slice(4,16));
        vm.chartDistanceRunning.push((vm.runningActivities[j].total_distance.toFixed())/1000);
      };

      $rootScope.labels = vm.chartDatesRunning;
      $rootScope.data = [
        vm.chartDistanceRunning
      ];
    };

    vm.walking = function () {
      vm.current = 'Walking';
      vm.walkingActivities = [];
      vm.chartDatesWalking = [];
      vm.chartDistanceWalking = [];

      for (var i = 0; i < vm.activities.length; i++){
        if (vm.activities[i].type === 'Walking'){
          vm.walkingActivities.push(vm.activities[i]);
        }
      };

      for (var j = 0; j < vm.walkingActivities.length; j++){
        vm.chartDatesWalking.push(vm.walkingActivities[j].start_time.slice(4,16));
        vm.chartDistanceWalking.push((vm.walkingActivities[j].total_distance.toFixed())/1000);
      };

      $rootScope.labels = vm.chartDatesWalking;
      $rootScope.data = [
        vm.chartDistanceWalking
      ];
    };

    vm.cycling = function () {
      vm.current = 'Cycling';
      vm.cyclingActivities = [];
      vm.chartDatesCycling = [];
      vm.chartDistanceCycling = [];

      for (var i = 0; i < vm.activities.length; i++){
        if (vm.activities[i].type === 'Cycling'){
          vm.cyclingActivities.push(vm.activities[i]);
        }
      };

      for (var j = 0; j < vm.cyclingActivities.length; j++){
        vm.chartDatesCycling.push(vm.cyclingActivities[j].start_time.slice(4,16));
        vm.chartDistanceCycling.push((vm.cyclingActivities[j].total_distance.toFixed())/1000);
      };

      $rootScope.labels = vm.chartDatesCycling;
      $rootScope.data = [
        vm.chartDistanceCycling
      ];
    };
  }
}());
