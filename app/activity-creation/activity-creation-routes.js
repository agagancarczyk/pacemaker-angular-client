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
      });
  }
}());
