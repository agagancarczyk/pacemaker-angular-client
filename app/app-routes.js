(function () {
  'use strict';

  angular
    .module('pacemakerClient')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
