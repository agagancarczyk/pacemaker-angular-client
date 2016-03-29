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
      .state('home.signup', {
        url: '/signup',
        templateUrl: 'signup/views/signup.tpl.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .state('home.login', {
        url: '/login',
        templateUrl: 'login/views/login.tpl.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm',
        data: {
          title: 'Login'
        }
      });
  }
}());
