(function () {
  'use strict';

  angular
    .module('reports')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('reports', {
        url: '/reports',
        templateUrl: 'reports/views/reports.tpl.html',
        controller: 'ReportsCtrl',
        controllerAs: 'reports'
      });
  }
}());
