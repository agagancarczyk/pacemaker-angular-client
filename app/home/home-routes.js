(function () {
  'use strict';

  angular
    .module('home')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/views/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .state('home.getAuthorizationPage', {
        url: '/?code',
        templateUrl: 'signup/views/signup.tpl.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      });
  }
}());
