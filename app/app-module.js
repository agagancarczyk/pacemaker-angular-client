(function () {
  'use strict';

  /* @ngdoc object
   * @name pacemakerClient
   * @description
   *
   */
  angular
    .module('pacemakerClient', [
      'ngAria',
      'ui.router',
      'ui.bootstrap',
      'home',
      'ngCookies',
      'dashboard',
      'activities'
    ]);
}());
