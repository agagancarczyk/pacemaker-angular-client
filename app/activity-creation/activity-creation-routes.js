(function () {
  'use strict';

  angular
    .module('activityCreation')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('activityCreation', {
        url: '/activity-creation',
        templateUrl: 'activity-creation/views/activity-creation.tpl.html',
        controller: 'ActivityCreationCtrl',
        controllerAs: 'activityCreation'
      })
      .state('activityCreation.step1', {
        url: '/activity-creation/step1',
        templateUrl: 'activity-creation/views/activity-creation-step-1.tpl.html'
      })
      .state('activityCreation.step2', {
        url: '/activity-creation/step2',
        templateUrl: 'activity-creation/views/activity-creation-step-2.tpl.html'
      });
  }
}());
