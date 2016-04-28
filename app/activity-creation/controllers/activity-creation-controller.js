(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name activityCreation.controller:ActivityCreationCtrl
   *
   * @description
   *
   */
  angular
    .module('activityCreation')
    .controller('ActivityCreationCtrl', ActivityCreationCtrl);

  function ActivityCreationCtrl(Users, FitnessActivities, $stateParams, $cookies, $state) {
    var vm = this;
    vm.ctrlName = 'ActivityCreationCtrl';
    vm.userProfile = '';
    
    /*
     * Get User's Profile
     */
    Users.getUserProfile().success(function (data) {
      vm.userProfile = data;
    });

  }
}());
