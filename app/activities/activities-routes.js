(function () {
  'use strict';

  angular
    .module('activities')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('activities', {
        url: '/activities',
        templateUrl: 'activities/views/activities.tpl.html',
        controller: 'ActivitiesCtrl',
        controllerAs: 'activities'
      })
      .state('newActivity', {
        url: '/newActivity',
        templateUrl: 'activities/views/new-activity.tpl.html',
        controller: 'NewActivityCtrl',
        controllerAs: 'newActivity'
      });
  }
}());
