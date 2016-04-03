(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($rootScope, Users, $state, $stateParams) {
    var vm = this;
    vm.ctrlName = 'HomeCtrl';

    vm.parameters = {
      client_id: $stateParams.client_id,
      response_type: $stateParams.response_type,
      redirect_uri: $stateParams.redirect_uri
    };

    vm.responseDetails = '';
    vm.error = '';

    vm.getAuthorizationPage = function () {
      Users.getAuthorizationPage(vm.parameters.redirect_uri, function (response) {
        console.log(response.config.url);
        if (angular.isObject(response)) {
          vm.responseDetails = response.data;
          console.log('Hello!');
          //vm.urlRedirect();
        } else if (response.data.error) {
          /* jshint camelcase: false */
          vm.error = response.data.error_description;
        }
      });
    };

    vm.urlRedirect = function () {
      console.log('urlRedirect');
      $state.go('home');
    };
  }
}());
