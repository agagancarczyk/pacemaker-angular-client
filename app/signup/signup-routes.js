(function () {
  'use strict';

  angular
    .module('signup')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('signup', {
        url: '/signup',
        templateUrl: 'signup/views/signup.tpl.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      });
  }
}());
