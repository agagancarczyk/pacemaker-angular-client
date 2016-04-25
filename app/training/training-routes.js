(function () {
  'use strict';

  angular
    .module('training')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('training', {
        url: '/training',
        templateUrl: 'training/views/training.tpl.html',
        controller: 'TrainingCtrl',
        controllerAs: 'training'
      });
  }
}());
